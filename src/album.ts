import { LastFM } from './base';
import { LastFMParam, LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMAlbumParams {
	readonly album: string;
	readonly artist: string;
}

export interface LastFMAlbumOptionalParams {
	readonly mbid?: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMAlbumAddTagsParams extends LastFMRequestParams<LastFMParam>, LastFMAlbumParams {
	readonly tags: string | string[];
}

export interface LastFMAlbumGetInfoParams
	extends LastFMRequestParams<0 | 1 | void>,
		LastFMAlbumParams,
		LastFMAlbumOptionalParams {
	readonly lang?: string;
	readonly username?: string;
}

export interface LastFMAlbumGetTagsParams
	extends LastFMRequestParams<0 | 1 | void>,
		LastFMAlbumParams,
		LastFMAlbumOptionalParams {
	readonly user?: string;
}

export interface LastFMAlbumGetTopTagsParams
	extends LastFMRequestParams<0 | 1 | void>,
		LastFMAlbumParams,
		LastFMAlbumOptionalParams {}

export interface LastFMAlbumRemoveLastFMTagParams extends LastFMRequestParams<LastFMParam>, LastFMAlbumParams {
	readonly tag: string;
}

export interface LastFMAlbumSearchParams extends LastFMRequestParams<number | void> {
	readonly page?: number;
	readonly album: string;
	readonly limit?: number;
}

export class LastFMAlbum extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public addTags(
		params: LastFMAlbumAddTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.addTags',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getInfo(
		params: LastFMAlbumGetInfoParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getInfo'
			})
			.send(callback);
	}

	public getTags(
		params: LastFMAlbumGetTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTags'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMAlbumGetTopTagsParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTopTags'
			})
			.send(callback);
	}

	public removeTag(
		params: LastFMAlbumRemoveLastFMTagParams,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public search(params: LastFMAlbumSearchParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.search'
			})
			.send(callback);
	}
}
