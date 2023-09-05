import axios from 'axios'

export interface IGetVideoByWeb {
	id: number
	title: string
	url: string
	created_at: string
	stats: {
		likeCount: string
		commentCount: number
		shareCount: string
		playCount: string
		saveCount: string
	}
	video: {
		noWatermark: string
		watermark: string
		cover: string
		dynamic_cover: string
		origin_cover: string
		width: number
		height: number
		durationFormatted: string
		duration: number
		ratio: string
	}
	music: {
		id: number
		title: string
		author: string
		cover_hd: string
		cover_large: string
		cover_medium: string
		cover_thumb: string
		durationFormatted: string
		duration: number
		play_url: string
	}
	author: {
		id: string
		name: string
		unique_id: string
		signature: string
		avatar: string
		avatar_thumb: string
	}
}

export async function getVideoByWeb(url: string) {
	const { data } = await axios.get<IGetVideoByWeb>(
		`https://developers.tiklydown.me/api/download?url=${url}`,
	)

	return data.video.noWatermark
}
