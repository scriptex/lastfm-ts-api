import { LastFM } from './base';
import { LastFMParam, LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMArtistParams extends LastFMRequestParams<LastFMParam> {
	readonly artist: string;
}

export interface LastFMArtistAddTagsParams extends LastFMRequestParams<LastFMParam>, LastFMArtistParams {
	readonly tags: string | string[];
}

export interface LastFMArtistGetInfoParams extends LastFMRequestParams<0 | 1 | void> {
	readonly lang?: string;
	readonly mbid?: string;
	readonly artist: string;
	readonly username?: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistGetSimilarParams extends LastFMRequestParams<0 | 1 | void | number> {
	readonly mbid?: string;
	readonly limit?: number;
	readonly artist: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistGetTagsParams extends LastFMRequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly user?: string;
	readonly artist: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistGetTopAlbumsParams extends LastFMRequestParams<0 | 1 | void | number> {
	readonly mbid?: string;
	readonly page?: number;
	readonly limit?: number;
	readonly artist: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistGetTopTagsParams extends LastFMRequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly artist: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistGetTopTracksParams extends LastFMRequestParams<0 | 1 | void | number> {
	readonly mbid?: string;
	readonly page?: number;
	readonly limit?: number;
	readonly artist: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMArtistRemoveLastFMTagParams extends LastFMRequestParams<LastFMParam> {
	readonly tag: string;
	readonly artist: string;
}

export interface LastFMArtistSearchParams extends LastFMRequestParams<number | void> {
	readonly page?: number;
	readonly limit?: number;
	readonly artist: string;
}

export class LastFMArtist extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public addTags(
		params: LastFMArtistAddTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.addTags',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getCorrection(
		params: LastFMArtistParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getCorrection'
			})
			.send(callback);
	}

	public getInfo(
		params: LastFMArtistGetInfoParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getInfo'
			})
			.send(callback);
	}

	public getSimilar(
		params: LastFMArtistGetSimilarParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getSimilar'
			})
			.send(callback);
	}

	public getTags(
		params: LastFMArtistGetTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTags'
			})
			.send(callback);
	}

	public getTopAlbums(
		params: LastFMArtistGetTopAlbumsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopAlbums'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMArtistGetTopTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMArtistGetTopTracksParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTracks'
			})
			.send(callback);
	}

	public removeTag(
		params: LastFMArtistRemoveLastFMTagParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public search(params: LastFMArtistSearchParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.search'
			})
			.send(callback);
	}
}
