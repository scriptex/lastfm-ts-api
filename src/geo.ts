import { LastFM } from './base';
import { LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMGeoGetTopArtistsParams extends LastFMRequestParams<number | void> {
	readonly page?: number;
	readonly limit?: number;
	readonly country: string;
}

export interface LastFMGeoGetTopTracksParams extends LastFMGeoGetTopArtistsParams {
	readonly location?: string;
}

export class LastFMGeo extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getTopArtists(
		params: LastFMGeoGetTopArtistsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopArtists'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMGeoGetTopTracksParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopTracks'
			})
			.send(callback);
	}
}
