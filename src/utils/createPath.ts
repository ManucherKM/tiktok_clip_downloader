import fs from 'fs'

export function createPath(path: fs.PathLike) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path, { recursive: true })
	}
}
