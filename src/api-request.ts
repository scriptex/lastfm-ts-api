import { createHash } from 'crypto';
import { parse, stringify } from 'querystring';
import { request, RequestOptions } from 'https';

export type LastFMUnknownFunction = (...args: unknown[]) => unknown;
export type LastFMParam = string | string[];
export type LastFMParams<T> = Record<string, LastFMParam | T>;
export type LastFMRequestParams<T> = Record<string, LastFMParam | T>;

export class LastFMApiRequest {
	private params: Map<string, any> = new Map();

	constructor() {
		this.params.set('format', 'json');
	}

	public set<T>(params: LastFMParams<void | T>): LastFMApiRequest {
		Object.entries(params).forEach(([key, value]) => {
			if (typeof value !== 'undefined') {
				this.params.set(key, value);
			}
		});

		return this;
	}

	public sign(secret?: string): LastFMApiRequest {
		const paramsObj: LastFMParams<string> = this.setParams();
		const paramsObjParsed = parse(stringify(paramsObj));

		const paramsStr = Array.from(Object.entries(paramsObjParsed))
			.filter(([key]) => key !== 'format' && key !== 'callback')
			.sort(([a], [b]) => {
				for (let i = 0; i < a.length || i < b.length; i++) {
					const charCodeA = a.charCodeAt(i) || 0;
					const charCodeB = b.charCodeAt(i) || 0;

					if (charCodeA < charCodeB) {
						return -1;
					}

					if (charCodeA > charCodeB) {
						return 1;
					}
				}

				return 0;
			})
			.map(param => param.join(''))
			.join('');

		this.params.set(
			'api_sig',
			createHash('md5')
				.update(paramsStr + secret)
				.digest('hex')
		);

		return this;
	}

	public send(
		method?: string | LastFMUnknownFunction,
		callback?: LastFMUnknownFunction
	): void | Promise<LastFMApiRequest> {
		callback =
			callback === undefined
				? typeof method === 'function'
					? method
					: undefined
				: typeof callback === 'function'
				? callback
				: undefined;
		method = typeof method === 'string' ? method : undefined;

		if (this.params.has('callback')) {
			this.params.delete('callback');
		}

		const paramsObj: LastFMParams<string> = this.setParams();
		const paramsStr = stringify(paramsObj);

		const options: RequestOptions = {
			hostname: 'ws.audioscrobbler.com',
			path: '/2.0'
		};

		if (method === 'POST') {
			options.method = 'POST';
			options.headers = {
				'Content-Length': Buffer.byteLength(paramsStr),
				'Content-Type': 'application/x-www-form-urlencoded'
			};
		} else {
			options.path += `?${paramsStr}`;
		}

		const LastFMapiRequest = new Promise((resolve, reject) => {
			const httpRequest = request(options, httpResponse => {
				let data = '';

				httpResponse.setEncoding('utf8');
				httpResponse.on('data', chunk => (data += chunk));
				httpResponse.on('end', () => resolve(data));
				httpResponse.on('error', err => reject(err));
			});

			httpRequest.on('error', err => reject(err));

			if (method === 'POST') {
				httpRequest.write(paramsStr);
			}

			httpRequest.end();
		}).then(apiResponse => {
			let data;

			try {
				data = JSON.parse(apiResponse as string);
			} catch (err) {
				throw new Error('Unable to parse API response to JSON');
			}

			if (data.error) {
				throw new Error(data.message);
			}

			return data;
		});

		if (callback && typeof callback === 'function') {
			LastFMapiRequest.then(
				data => callback!(null, data),
				err => callback!(err, null)
			);

			return undefined;
		}

		return LastFMapiRequest;
	}

	private setParams(): LastFMParams<string> {
		const result: LastFMParams<string> = {};

		this.params.forEach((value, key) => {
			if (typeof value !== 'undefined') {
				result[key] = value;
			}
		});

		return result;
	}
}

export default LastFMApiRequest;
