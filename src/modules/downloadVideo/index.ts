import { getAvailableUrl } from '../../utils/getAvailableUrl'
import { getCopyString } from '../../utils/getCopyString'
import { getFileFromLink } from '../../utils/getFileFromLink'
import { getVideoByWeb } from '../getVideoByWeb'
import fs from 'fs'

export async function downloadVideo(url: string, pathToVideoSave: string) {
	let currentURL = getCopyString(url)

	const isMobileURL = url.includes('vt')

	if (isMobileURL) {
		currentURL = await getAvailableUrl(currentURL)
	}

	const link = await getVideoByWeb(currentURL)
	const file = await getFileFromLink(link)
	fs.writeFileSync(pathToVideoSave, file)
}
