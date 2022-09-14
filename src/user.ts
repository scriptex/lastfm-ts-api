import { LastFM } from './base';
import { LastFMParam, LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMUserParams extends LastFMRequestParams<LastFMParam | number | void | boolean> {
	readonly user: string;
}

export interface LastFMUserOptionalParams {
	readonly page?: number;
	readonly limit?: number;
}

export interface LastFMUserGetFriends extends LastFMUserParams, LastFMUserOptionalParams {
	readonly recenttracks?: boolean;
}

export interface LastFMUserGetLovedTracks extends LastFMUserParams, LastFMUserOptionalParams {}

export interface LastFMUserGetPersonalTags extends LastFMUserParams, LastFMUserOptionalParams {
	readonly tag?: string;
	readonly taggingtype: 'artist' | 'album' | 'track';
}

export interface LastFMUserGetRecentTracks extends LastFMUserParams, LastFMUserOptionalParams {
	readonly to?: string;
	readonly from?: string;
	readonly extended: 0 | 1;
}

export interface LastFMUserGetTop extends LastFMUserParams, LastFMUserOptionalParams {
	readonly period?: 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';
}

export interface LastFMUserGetTopTags extends LastFMRequestParams<string | number | void> {
	readonly user: string;
	readonly limit?: number;
}

export interface LastFMUserGetWeekly extends LastFMRequestParams<string | number | void> {
	readonly to?: string;
	readonly user: string;
	readonly from?: string;
}

export class LastFMUser extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getFriends(params: LastFMUserGetFriends, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getFriends'
			})
			.send(callback);
	}

	public getInfo(params: LastFMUserParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getInfo'
			})
			.send(callback);
	}

	public getLovedTracks(
		params: LastFMUserGetLovedTracks,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getLovedTracks'
			})
			.send(callback);
	}

	public getPersonalTags(
		params: LastFMUserGetPersonalTags,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getPersonalTags'
			})
			.send(callback);
	}

	public getRecentTracks(
		params: LastFMUserGetRecentTracks,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getRecentTracks'
			})
			.send(callback);
	}

	public getTopAlbums(params: LastFMUserGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopAlbums'
			})
			.send(callback);
	}

	public getTopArtists(params: LastFMUserGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(params: LastFMUserGetTopTags, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(params: LastFMUserGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTracks'
			})
			.send(callback);
	}

	public getWeeklyAlbumChart(
		params: LastFMUserGetWeekly,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyAlbumChart'
			})
			.send(callback);
	}

	public getWeeklyArtistChart(
		params: LastFMUserGetWeekly,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyArtistChart'
			})
			.send(callback);
	}

	public getWeeklyChartList(
		params: LastFMUserParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyChartList'
			})
			.send(callback);
	}

	public getWeeklyTrackChart(
		params: LastFMUserGetWeekly,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyTrackChart'
			})
			.send(callback);
	}
}
