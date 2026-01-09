import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMUnknownFunction,
	LastFMGeoGetTopTracksParams,
	LastFMGeoGetTopArtistsParams,
	LastFMGeoGetTopTracksResponse,
	LastFMGeoGetTopArtistsResponse
} from './types.js';

export class LastFMGeo extends LastFM {
	public getTopArtists(
		params: LastFMGeoGetTopArtistsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMGeoGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMGeoGetTopArtistsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopArtists'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMGeoGetTopTracksParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMGeoGetTopTracksResponse> {
		return new LastFMApiRequest<LastFMGeoGetTopTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopTracks'
			})
			.send(callback);
	}
}
