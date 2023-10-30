import { LastFM } from './base';
import { LastFMApiRequest } from './api-request';
import {
	LastFMUnknownFunction,
	LastFMGeoGetTopTracksParams,
	LastFMGeoGetTopArtistsParams,
	LastFMGeoGetTopTracksResponse,
	LastFMGeoGetTopArtistsResponse
} from './types';

export class LastFMGeo extends LastFM {
	public getTopArtists(
		params: LastFMGeoGetTopArtistsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMGeoGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMGeoGetTopArtistsResponse>()
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
		return new LastFMApiRequest<LastFMGeoGetTopTracksResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopTracks'
			})
			.send(callback);
	}
}
