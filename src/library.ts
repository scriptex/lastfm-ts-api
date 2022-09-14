import { LastFM } from './base';
import { LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMLibraryGetArtists extends LastFMRequestParams<number | void> {
	readonly user: string;
	readonly page?: number;
	readonly limit?: number;
}

export class LastFMLibrary extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getArtists(
		params: LastFMLibraryGetArtists,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'library.getArtists'
			})
			.send(callback);
	}
}
