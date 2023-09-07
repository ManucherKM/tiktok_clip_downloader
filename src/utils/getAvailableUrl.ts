import axios from 'axios'

export async function getAvailableUrl(url: string) {
	const res = await axios.get(url)
	return res.request.res.responseUrl as string
}
