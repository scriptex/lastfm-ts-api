import LastFMApiRequest from './api-request.js';
import { LastFM } from './base.js';
import {
	LastFMArtistParams,
	LastFMUnknownFunction,
	LastFMArtistSearchParams,
	LastFMArtistAddTagsParams,
	LastFMArtistGetInfoParams,
	LastFMArtistGetTagsParams,
	LastFMArtistSearchResponse,
	LastFMArtistGetInfoResponse,
	LastFMArtistGetTagsResponse,
	LastFMArtistGetSimilarParams,
	LastFMArtistGetTopTagsParams,
	LastFMArtistGetSimilarResponse,
	LastFMArtistGetTopAlbumsParams,
	LastFMArtistGetTopTagsResponse,
	LastFMArtistGetTopTracksParams,
	LastFMArtistGetTopAlbumsResponse,
	LastFMArtistGetTopTracksResponse,
	LastFMArtistGetCorrectionResponse,
	LastFMArtistRemoveLastFMTagParams
} from './types.js';

export class LastFMArtist extends LastFM {
	public addTags(params: LastFMArtistAddTagsParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
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
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetCorrectionResponse> {
		return new LastFMApiRequest<LastFMArtistGetCorrectionResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getCorrection'
			})
			.send(callback);
	}

	public getInfo(
		params: LastFMArtistGetInfoParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetInfoResponse> {
		return new LastFMApiRequest<LastFMArtistGetInfoResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getInfo'
			})
			.send(callback);
	}

	public getSimilar(
		params: LastFMArtistGetSimilarParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetSimilarResponse> {
		return new LastFMApiRequest<LastFMArtistGetSimilarResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getSimilar'
			})
			.send(callback);
	}

	public getTags(
		params: LastFMArtistGetTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetTagsResponse> {
		return new LastFMApiRequest<LastFMArtistGetTagsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTags'
			})
			.send(callback);
	}

	public getTopAlbums(
		params: LastFMArtistGetTopAlbumsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetTopAlbumsResponse> {
		return new LastFMApiRequest<LastFMArtistGetTopAlbumsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopAlbums'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMArtistGetTopTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetTopTagsResponse> {
		return new LastFMApiRequest<LastFMArtistGetTopTagsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(
		params: LastFMArtistGetTopTracksParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistGetTopTracksResponse> {
		return new LastFMApiRequest<LastFMArtistGetTopTracksResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTracks'
			})
			.send(callback);
	}

	public removeTag(params: LastFMArtistRemoveLastFMTagParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public search(
		params: LastFMArtistSearchParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMArtistSearchResponse> {
		return new LastFMApiRequest<LastFMArtistSearchResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.search'
			})
			.send(callback);
	}
}
