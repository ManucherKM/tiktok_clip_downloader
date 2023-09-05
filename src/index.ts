import { singleLoad } from './scenarios/singleLoad'
import { clearTerminal } from './utils/clearTerminal'
import { multipleLoad } from './scenarios/multipleLoad'
import { specificUser } from './scenarios/specificUser'
const { Select, Input } = require('enquirer')

const start = async () => {
	try {
		clearTerminal()

		const question1 = new Select({
			name: 'Download type',
			message: 'Choose the type of download:',
			choices: [
				'Multiple load (with videos.txt)',
				'Specific user',
				'Single load',
			],
		})

		const question1Answer = await question1.run()

		if (question1Answer === 'Single load') {
			const inputVideoUrl = new Input({
				name: 'video URL',
				message: 'video URL: ',
			})

			const url = await inputVideoUrl.run()

			if (!url) {
				console.log('URL not found')
				return
			}

			console.log('Uploading a video...')

			await singleLoad(url)

			console.log('Download completed.')
		} else if (question1Answer === 'Multiple load (with videos.txt)') {
			console.log('Uploading a video...')

			await multipleLoad()

			console.log('Download completed.')
		} else if (question1Answer === 'Specific user') {
			// await specificUser()
		}
	} catch (e) {
		console.error(e)
	}
}

start()
