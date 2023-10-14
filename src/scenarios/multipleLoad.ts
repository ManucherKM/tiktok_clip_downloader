import { downloadVideo } from '../modules/downloadVideo'
import path from 'path'
import fs from 'fs'
import { createPath } from '../utils/createPath'

export async function multipleLoad() {
	const pathToTxtFile = path.join(__dirname, '..', '..', 'videos.txt')

	const urls = fs.readFileSync(pathToTxtFile, 'utf-8').split('\r\n')

	if (urls.length === 1 && urls[0].length === 0) {
		throw new Error(
			'Could not find the URL to download the video. Check the videos.txt file.',
		)
	}

	const pathToFolder = 'downloads'

	createPath(pathToFolder)

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
