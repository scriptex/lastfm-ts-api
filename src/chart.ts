import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMChartParams,
	LastFMUnknownFunction,
	LastFMChartGetTopTagsResponse,
	LastFMChartGetTopTracksResponse,
	LastFMChartGetTopArtistsResponse
} from './types.js';

export class LastFMChart extends LastFM {
	public getTopArtists(
		params: LastFMChartParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMChartGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMChartGetTopArtistsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMChartParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMChartGetTopTagsResponse> {
		return new LastFMApiRequest<LastFMChartGetTopTagsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMChartParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMChartGetTopTracksResponse> {
		return new LastFMApiRequest<LastFMChartGetTopTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTracks'
			})
			.send(callback);
	}
}
