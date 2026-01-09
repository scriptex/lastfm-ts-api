import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMUserParams,
	LastFMUnknownFunction,
	LastFMUserGetTopParams,
	LastFMUserGetInfoResponse,
	LastFMUserGetWeeklyParams,
	LastFMUserGetFriendsParams,
	LastFMUserGetTopTagsParams,
	LastFMUserGetFriendsResponse,
	LastFMUserGetTopTagsResponse,
	LastFMUserGetLovedTracksParams,
	LastFMUserGetTopAlbumsResponse,
	LastFMUserGetTopTracksResponse,
	LastFMUserGetPersonalTagsParams,
	LastFMUserGetRecentTracksParams,
	LastFMUserGetTopArtistsResponse,
	LastFMUserGetLovedTracksResponse,
	LastFMUserGetPersonalTagsResponse,
	LastFMUserGetRecentTracksResponse,
	LastFMUserGetWeeklyChartListResponse,
	LastFMUserGetWeeklyAlbumChartResponse,
	LastFMUserGetWeeklyTrackChartResponse,
	LastFMUserGetWeeklyArtistChartResponse
} from './types.js';

export class LastFMUser extends LastFM {
	public getFriends(
		params: LastFMUserGetFriendsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetFriendsResponse> {
		return new LastFMApiRequest<LastFMUserGetFriendsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getFriends'
			})
			.send(callback);
	}

	public getInfo(params: LastFMUserParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetInfoResponse> {
		return new LastFMApiRequest<LastFMUserGetInfoResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getInfo',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send(callback);
	}

	public getLovedTracks(
		params: LastFMUserGetLovedTracksParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetLovedTracksResponse> {
		return new LastFMApiRequest<LastFMUserGetLovedTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getLovedTracks'
			})
			.send(callback);
	}

	public getPersonalTags(
		params: LastFMUserGetPersonalTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetPersonalTagsResponse> {
		return new LastFMApiRequest<LastFMUserGetPersonalTagsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getPersonalTags'
			})
			.send(callback);
	}

	public getRecentTracks(
		params: LastFMUserGetRecentTracksParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetRecentTracksResponse> {
		return new LastFMApiRequest<LastFMUserGetRecentTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getRecentTracks'
			})
			.send(callback);
	}

	public getTopAlbums(
		params: LastFMUserGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetTopAlbumsResponse> {
		return new LastFMApiRequest<LastFMUserGetTopAlbumsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopAlbums'
			})
			.send(callback);
	}

	public getTopArtists(
		params: LastFMUserGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetTopArtistsResponse> {
		return new LastFMApiRequest<LastFMUserGetTopArtistsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMUserGetTopTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetTopTagsResponse> {
		return new LastFMApiRequest<LastFMUserGetTopTagsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMUserGetTopParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetTopTracksResponse> {
		return new LastFMApiRequest<LastFMUserGetTopTracksResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTracks'
			})
			.send(callback);
	}

	public getWeeklyAlbumChart(
		params: LastFMUserGetWeeklyParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetWeeklyAlbumChartResponse> {
		return new LastFMApiRequest<LastFMUserGetWeeklyAlbumChartResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyAlbumChart'
			})
			.send(callback);
	}

	public getWeeklyArtistChart(
		params: LastFMUserGetWeeklyParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetWeeklyArtistChartResponse> {
		return new LastFMApiRequest<LastFMUserGetWeeklyArtistChartResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyArtistChart'
			})
			.send(callback);
	}

	public getWeeklyChartList(
		params: LastFMUserParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetWeeklyChartListResponse> {
		return new LastFMApiRequest<LastFMUserGetWeeklyChartListResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyChartList'
			})
			.send(callback);
	}

	public getWeeklyTrackChart(
		params: LastFMUserGetWeeklyParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUserGetWeeklyTrackChartResponse> {
		return new LastFMApiRequest<LastFMUserGetWeeklyTrackChartResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyTrackChart'
			})
			.send(callback);
	}
}
