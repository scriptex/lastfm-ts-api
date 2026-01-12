import { createHash } from 'node:crypto';
import { parse, stringify } from 'node:querystring';
import { request, RequestOptions } from 'node:https';

import { LastFMParams, LastFMUnknownFunction, OptionalConfig } from './types.js';

export class LastFMApiRequest<T> {
	public config: OptionalConfig;

	private readonly params: Map<string, any> = new Map();

	constructor(config: OptionalConfig) {
		this.params.set('format', 'json');
		this.config = config;
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

		const LastFMapiRequest = new Promise<string>((resolve, reject) => {
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
		}).then((response: string) => {
			let data;

			try {
				data = JSON.parse(response);
			} catch (err) {
				throw new Error(`lastfm-ts-api: Unable to parse LastFM API response to JSON. API response is ${err}`);
			}

			if (data?.error) {
				let msg = 'LastFM API returned an error.';

				if (data?.error?.['#text'] !== undefined) {
					const code = data?.error?.code !== undefined ? ` (Code ${data.error.code})` : '';

					msg = `${data?.error?.['#text']}${code}`;
				} else if (data?.message !== undefined) {
					msg = data.message;
				}

				throw new Error(`lastfm-ts-api: ${msg}`);
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
			hostname: this.config.hostname ?? 'ws.audioscrobbler.com',
			path: this.config.path ?? '/2.0'
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
