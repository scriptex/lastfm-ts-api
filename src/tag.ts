import { LastFM } from './base';
import { LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMTagParams extends LastFMRequestParams<number | void> {
	readonly tag: string;
}

export interface LastFMTagOptionalParams {
	readonly page?: number;
	readonly limit?: number;
}

export interface LastFMTagGetInfoParams extends LastFMRequestParams<number | void>, LastFMTagParams {
	readonly lang?: string;
}

export interface LastFMTagGetTop extends LastFMRequestParams<number | void>, LastFMTagParams, LastFMTagOptionalParams {}

export class LastFMTag extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getInfo(params: LastFMTagGetInfoParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getInfo'
			})
			.send(callback);
	}

	public getSimilar(params: LastFMTagParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getSimilar'
			})
			.send(callback);
	}

	public getTopAlbums(params: LastFMTagGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopAlbums'
			})
			.send(callback);
	}

	public getTopArtists(params: LastFMTagGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(params: LastFMTagGetTop, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTracks'
			})
			.send(callback);
	}

	public getWeeklyChartList(
		params: LastFMTagParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getWeeklyChartList'
			})
			.send(callback);
	}
}
