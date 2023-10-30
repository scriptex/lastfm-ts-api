import { LastFM } from './base';
import { LastFMApiRequest } from './api-request';
import {
	LastFMChartParams,
	LastFMUnknownFunction,
	LastFMChartGetTopTagsResponse,
	LastFMChartGetTopTracksResponse,
	LastFMChartGetTopArtistsResponse
} from './types';

export class LastFMChart extends LastFM {
	public getTopArtists(
		params: LastFMChartParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMChartGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMChartGetTopArtistsResponse>()
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
		return new LastFMApiRequest<LastFMChartGetTopTagsResponse>()
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
		return new LastFMApiRequest<LastFMChartGetTopTracksResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTracks'
			})
			.send(callback);
	}
}
