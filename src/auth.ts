import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMUnknownFunction,
	LastFMAuthSessionResponse,
	LastFMAuthGetSessionParams,
	LastFMAuthGetTokenResponse,
	LastFMAuthGetMobileSessionParams
} from './types.js';

export class LastFMAuth extends LastFM {
	public getMobileSession(
		params: LastFMAuthGetMobileSessionParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMAuthSessionResponse> {
		return new LastFMApiRequest<LastFMAuthSessionResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'auth.getMobileSession'
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getSession(
		params: LastFMAuthGetSessionParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMAuthSessionResponse> {
		return new LastFMApiRequest<LastFMAuthSessionResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'auth.getSession'
			})
			.sign(this.secret)
			.send(callback);
	}

	public getToken(callback?: LastFMUnknownFunction): Promise<LastFMAuthGetTokenResponse> {
		return new LastFMApiRequest<LastFMAuthGetTokenResponse>()
			.set({
				api_key: this.apiKey,
				method: 'auth.getToken'
			})
			.sign(this.secret)
			.send(callback);
	}
}
