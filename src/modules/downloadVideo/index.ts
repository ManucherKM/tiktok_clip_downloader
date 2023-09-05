import { getFileFromLink } from '../../utils/getFileFromLink'
import { getVideoByWeb } from '../getVideoByWeb'
import fs from 'fs'

export async function downloadVideo(url: string, pathToVideoSave: string) {
	const link = await getVideoByWeb(url)
	const file = await getFileFromLink(link)
	fs.writeFileSync(pathToVideoSave, file)
}
