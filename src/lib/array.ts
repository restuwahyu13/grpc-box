import MemoryStream from 'memorystream'
import { gzipSync } from 'zlib'
import { Transform } from 'readable-stream'
import { isType } from 'is-any-type'
import { StreamBoxError } from '../utils/util.error'
import { waitFor } from '../utils/util.wait'

const memoryStream = new MemoryStream() as MemoryStream
const transformStream = new Transform() as Transform

/**
 * create a data stream for the array data type
 * @param data - set stream data for consumption to the client - required
 * @param delay - set delay before returning data to the client - optional
 * @return Promise
 */

export default function array(data: Record<string, any>[] | any[], delay?: number): ReturnType<() => Promise<Buffer>> {
	return new Promise(async (resolve, reject) => {
		if (isType(data) === 'array') {
			await waitFor(delay)
			const toArray: string = JSON.stringify({ data: data })
			memoryStream.write(Buffer.from(toArray))
			memoryStream.once('data', (chunk) => transformStream.emit('response', gzipSync(chunk)))
			transformStream.once('response', (data) => resolve(data))
			transformStream.end()
		} else {
			reject(new StreamBoxError(`data must be a array you give type ${isType(data)}`))
		}
	})
}
