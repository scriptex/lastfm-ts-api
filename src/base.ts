import { OptionalConfig } from './types.js';

export class LastFM {
	public apiKey: string;
	public config: OptionalConfig;
	public secret?: string;
	public sessionKey?: string;

	constructor(apiKey: string, secret?: string, sessionKey?: string, config?: OptionalConfig) {
		if (typeof apiKey !== 'string') {
			throw new TypeError('apiKey must be of type string');
		}

		this.apiKey = apiKey;

		if (secret !== undefined) {
			if (typeof secret !== 'string') {
				throw new TypeError('secret must be of type string');
			}

			this.secret = secret;
		}

		if (sessionKey !== undefined) {
			if (typeof sessionKey !== 'string') {
				throw new TypeError('sessionKey must be of type string');
			}

			this.sessionKey = sessionKey;
		}

		if (config !== undefined) {
			this.config = config;
		} else {
			this.config = {
				hostname: 'ws.audioscrobbler.com',
				path: '/2.0'
			};
		}
	}
}
