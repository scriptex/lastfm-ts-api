import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMTagParams,
	LastFMTagGetTopParams,
	LastFMUnknownFunction,
	LastFMTagGetInfoParams,
	LastFMTagGetInfoResponse,
	LastFMTagGetSimilarResponse,
	LastFMTagGetTopTagsResponse,
	LastFMTagGetTopAlbumsResponse,
	LastFMTagGetTopTracksResponse,
	LastFMTagGetTopArtistsResponse,
	LastFMTagGetWeeklyChartListResponse
} from './types.js';

export class LastFMTag extends LastFM {
	public getInfo(
		params: LastFMTagGetInfoParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTagGetInfoResponse> {
		return new LastFMApiRequest<LastFMTagGetInfoResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getInfo'
			})
			.send(callback);
	}

	public getSimilar(params: LastFMTagParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetSimilarResponse> {
		return new LastFMApiRequest<LastFMTagGetSimilarResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getSimilar'
			})
			.send(callback);
	}

	public getTopAlbums(
		params: LastFMTagGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTagGetTopAlbumsResponse> {
		return new LastFMApiRequest<LastFMTagGetTopAlbumsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopAlbums'
			})
			.send(callback);
	}

	public getTopArtists(
		params: LastFMTagGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTagGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMTagGetTopArtistsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(callback?: LastFMUnknownFunction): Promise<LastFMTagGetTopTagsResponse> {
		return new LastFMApiRequest<LastFMTagGetTopTagsResponse>(this.config)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMTagGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTagGetTopTracksResponse> {
		return new LastFMApiRequest<LastFMTagGetTopTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTracks'
			})
			.send(callback);
	}

	public getWeeklyChartList(
		params: LastFMTagParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTagGetWeeklyChartListResponse> {
		return new LastFMApiRequest<LastFMTagGetWeeklyChartListResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getWeeklyChartList'
			})
			.send(callback);
	}
}
