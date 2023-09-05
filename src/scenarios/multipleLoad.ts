import { downloadVideo } from '../modules/downloadVideo'
import path from 'path'
import fs from 'fs'

export async function multipleLoad() {
	const pathToTxtFile = path.join(__dirname, '..', '..', 'videos.txt')

	const urls = fs.readFileSync(pathToTxtFile, 'utf-8').split('\r\n')

	for (const url of urls) {
		const pathToVideoSave = path.join(
			__dirname,
			'..',
			'..',
			'downloads',
			`${Date.now()}.mp4`,
		)

		await downloadVideo(url, pathToVideoSave)

		console.log('Downloaded: ', url)
	}
}
