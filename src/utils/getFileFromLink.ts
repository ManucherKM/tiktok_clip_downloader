import axios from 'axios'

export async function getFileFromLink(link: string) {
	const { data } = await axios.get<Buffer>(link, {
		responseType: 'arraybuffer',
	})

	return data
}
