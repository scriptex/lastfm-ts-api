import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import {
	LastFMUnknownFunction,
	LastFMAlbumSearchParams,
	LastFMAlbumAddTagsParams,
	LastFMAlbumGetInfoParams,
	LastFMAlbumGetTagsParams,
	LastFMAlbumSearchResponse,
	LastFMAlbumGetInfoResponse,
	LastFMAlbumGetTagsResponse,
	LastFMAlbumGetTopTagsParams,
	LastFMAlbumRemoveLastFMTagParams
} from './types.js';

export class LastFMAlbum extends LastFM {
	public addTags(params: LastFMAlbumAddTagsParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>(this.config)
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
		callback?: LastFMUnknownFunction
	): Promise<LastFMAlbumGetInfoResponse> {
		return new LastFMApiRequest<LastFMAlbumGetInfoResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getInfo'
			})
			.send(callback);
	}

	public getTags(
		params: LastFMAlbumGetTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMAlbumGetTagsResponse> {
		return new LastFMApiRequest<LastFMAlbumGetTagsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTags'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMAlbumGetTopTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMAlbumGetTagsResponse> {
		return new LastFMApiRequest<LastFMAlbumGetTagsResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTopTags'
			})
			.send(callback);
	}

	public removeTag(params: LastFMAlbumRemoveLastFMTagParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public search(
		params: LastFMAlbumSearchParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMAlbumSearchResponse> {
		return new LastFMApiRequest<LastFMAlbumSearchResponse>(this.config)
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.search'
			})
			.send(callback);
	}
}
