import { downloadVideo } from '../modules/downloadVideo'
import path from 'path'
import { createPath } from '../utils/createPath'

export async function singleLoad(url: string) {
	const pathToFolder = 'downloads'

	createPath(pathToFolder)

	const pathToVideoSave = path.join(
		__dirname,
		'..',
		'..',
		'downloads',
		`${Date.now()}.mp4`,
	)

	await downloadVideo(url, pathToVideoSave)
}
