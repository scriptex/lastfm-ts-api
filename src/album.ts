import { LastFM } from './base';
import {
	LastFMParam,
	LastFMApiRequest,
	LastFMBooleanNumber,
	LastFMRequestParams,
	LastFMUnknownFunction,
	LastFMBooleanNumberOrVoid
} from './api-request';

export type LastFMAlbumParams = Readonly<{
	album: string;
	artist: string;
}>;

export type LastFMAlbumOptionalParams = Readonly<{
	mbid?: string;
	autocorrect?: LastFMBooleanNumber;
}>;

export type LastFMAlbumAddTagsParams = LastFMRequestParams<LastFMParam> &
	LastFMAlbumParams &
	Readonly<{
		tags: string | string[];
	}>;

export type LastFMAlbumGetInfoParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	LastFMAlbumParams &
	LastFMAlbumOptionalParams &
	Readonly<{
		lang?: string;
		username?: string;
	}>;

export type LastFMAlbumGetTagsParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	LastFMAlbumParams &
	LastFMAlbumOptionalParams &
	Readonly<{
		user?: string;
	}>;

export type LastFMAlbumGetTopTagsParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	LastFMAlbumParams &
	LastFMAlbumOptionalParams;

export type LastFMAlbumRemoveLastFMTagParams = LastFMRequestParams<LastFMParam> &
	LastFMAlbumParams &
	Readonly<{
		tag: string;
	}>;

export type LastFMAlbumSearchParams = LastFMRequestParams<number | void> &
	Readonly<{
		page?: number;
		album: string;
		limit?: number;
	}>;

export type LastFMAlbumGetInfoResponse = Readonly<{
	album: {
		artist: string;
		mbid: string;
		tags: {
			tag: Array<{
				url: string;
				name: string;
			}>;
		};
		playcount: string;
		image: Array<{
			size: string;
			'#text': string;
		}>;
		tracks: {
			track: Array<{
				streamable: { fulltrack: string; '#text': string };
				duration: number;
				url: string;
				name: string;
				'@attr': {
					rank: number;
				};
				artist: {
					url: string;
					name: string;
					mbid: string;
				};
			}>;
		};
		url: string;
		name: string;
		listeners: string;
		wiki: {
			published: string;
			summary: string;
		};
	};
}>;

export type LastFMAlbumGetTagsResponse = Readonly<{
	tags: {
		tag: Array<{
			name: string;
			url: string;
		}>;
	};
}>;

export type LastFMAlbumSearchResponse = Readonly<{
	results: {
		'opensearch:Query': {
			'#text': string;
			role: string;
			searchTerms: string;
			startPage: string;
		};
		'opensearch:totalResults': string;
		'opensearch:startIndex': string;
		'opensearch:itemsPerPage': string;
		albummatches: {
			album: Array<{
				name: string;
				artist: string;
				url: string;
				image: Array<{
					'#text': string;
					size: string;
				}>;
				streamable: LastFMBooleanNumber;
				mbid: string;
			}>;
		};
		'@attr': {
			for: string;
		};
	};
}>;

export class LastFMAlbum extends LastFM {
	public addTags(params: LastFMAlbumAddTagsParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
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
		return new LastFMApiRequest<LastFMAlbumGetInfoResponse>()
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
		return new LastFMApiRequest<LastFMAlbumGetTagsResponse>()
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
		return new LastFMApiRequest<LastFMAlbumGetTagsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTopTags'
			})
			.send(callback);
	}

	public removeTag(params: LastFMAlbumRemoveLastFMTagParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
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
		return new LastFMApiRequest<LastFMAlbumSearchResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.search'
			})
			.send(callback);
	}
}
