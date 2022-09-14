import { LastFM } from './base';
import { LastFMParam, LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMAuthGetMobileSessionParams extends LastFMRequestParams<LastFMParam> {
	readonly username: string;
	readonly password: string;
}

export interface LastFMAuthGetSessionParams extends LastFMRequestParams<LastFMParam> {
	readonly token: string;
}

export class LastFMAuth extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getMobileSession(
		params: LastFMAuthGetMobileSessionParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
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
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'auth.getSession'
			})
			.sign(this.secret)
			.send(callback);
	}

	public getToken(callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set({
				api_key: this.apiKey,
				method: 'auth.getToken'
			})
			.sign(this.secret)
			.send(callback);
	}
}
