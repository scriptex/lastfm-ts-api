import { createHash } from 'crypto';
import { parse, stringify } from 'querystring';
import { request, RequestOptions } from 'https';

import { LastFMParams, LastFMUnknownFunction } from './types';

export class LastFMApiRequest<T> {
	private params: Map<string, any> = new Map();

	constructor() {
		this.params.set('format', 'json');
	}

	public set<P>(params: LastFMParams<void | P>): this {
		Object.entries(params).forEach(([key, value]) => {
			if (typeof value !== 'undefined') {
				this.params.set(key, value);
			}
		});

		return this;
	}

	public sign(secret?: string): this {
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

	public send(method?: string | LastFMUnknownFunction, callback?: LastFMUnknownFunction): Promise<T> {
		callback = this.getCallback(method, callback);

		method = this.getMethod(method);

		if (this.params.has('callback')) {
			this.params.delete('callback');
		}

		const paramsObj: LastFMParams<string> = this.setParams();
		const paramsStr = stringify(paramsObj);
		const options = this.getOptions(method, paramsStr);

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
			return LastFMapiRequest.then(
				data => callback!(null, data),
				err => callback!(err, null)
			) as typeof LastFMapiRequest;
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

	private getCallback(
		method?: string | LastFMUnknownFunction,
		callback?: LastFMUnknownFunction
	): LastFMUnknownFunction | undefined {
		return callback === undefined
			? typeof method === 'function'
				? method
				: undefined
			: typeof callback === 'function'
			? callback
			: undefined;
	}

	private getMethod(method?: string | LastFMUnknownFunction): string | LastFMUnknownFunction | undefined {
		return typeof method === 'string' ? method : undefined;
	}

	private getOptions(method: string | LastFMUnknownFunction | undefined, params: string): RequestOptions {
		const options: RequestOptions = {
			hostname: 'ws.audioscrobbler.com',
			path: '/2.0'
		};

		if (method === 'POST') {
			options.method = 'POST';
			options.headers = {
				'Content-Length': Buffer.byteLength(params),
				'Content-Type': 'application/x-www-form-urlencoded'
			};
		} else {
			options.path += `?${params}`;
		}

		return options;
	}
}

export default LastFMApiRequest;
