import { downloadVideo } from '../modules/downloadVideo'
import path from 'path'

export async function singleLoad(url: string) {
	const pathToVideoSave = path.join(
		__dirname,
		'..',
		'..',
		'downloads',
		`${Date.now()}.mp4`,
	)

	await downloadVideo(url, pathToVideoSave)
}
