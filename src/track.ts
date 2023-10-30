import { LastFM } from './base';
import { LastFMApiRequest } from './api-request';
import {
	LastFMTrackParams,
	LastFMUnknownFunction,
	LastFMTrackSearchParams,
	LastFMTrackAddTagsParams,
	LastFMTrackGetInfoParams,
	LastFMTrackGetTagsParams,
	LastFMTrackScrobbleParams,
	LastFMTrackSearchResponse,
	LastFMTrackGetInfoResponse,
	LastFMTrackGetTagsResponse,
	LastFMTrackRemoveTagParams,
	LastFMTrackGetSimilarParams,
	LastFMTrackGetTopTagsParams,
	LastFMTrackScroblleResponse,
	LastFMTrackGetSimilarResponse,
	LastFMTrackGetTopTagsResponse,
	LastFMUpdateNowPlayingResponse,
	LastFMTrackGetCorrectionResponse,
	LastFMTrackUpdateNowPlayingParams
} from './types';

export class LastFMTrack extends LastFM {
	public addTags(params: LastFMTrackAddTagsParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.addTags',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getCorrection(
		params: LastFMTrackParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackGetCorrectionResponse> {
		return new LastFMApiRequest<LastFMTrackGetCorrectionResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getCorrection'
			})
			.send(callback);
	}

	public getInfo(
		params: LastFMTrackGetInfoParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackGetInfoResponse> {
		return new LastFMApiRequest<LastFMTrackGetInfoResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getInfo'
			})
			.send(callback);
	}

	public getSimilar(
		params: LastFMTrackGetSimilarParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackGetSimilarResponse> {
		return new LastFMApiRequest<LastFMTrackGetSimilarResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getSimilar'
			})
			.send(callback);
	}

	public getTags(
		params: LastFMTrackGetTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackGetTagsResponse> {
		return new LastFMApiRequest<LastFMTrackGetTagsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTags'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMTrackGetTopTagsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackGetTopTagsResponse> {
		return new LastFMApiRequest<LastFMTrackGetTopTagsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTopTags'
			})
			.send(callback);
	}

	public love(params: LastFMTrackParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.love',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public removeTag(params: LastFMTrackRemoveTagParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public scrobble(
		params: LastFMTrackScrobbleParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackScroblleResponse> {
		return new LastFMApiRequest<LastFMTrackScroblleResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.scrobble',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public scrobbleMany(
		paramsArr: LastFMTrackScrobbleParams[],
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackScroblleResponse> {
		const params: LastFMTrackScrobbleParams = {} as LastFMTrackScrobbleParams;

		paramsArr.forEach((paramsObj: LastFMTrackScrobbleParams, i: number) =>
			Object.entries(paramsObj).forEach(
				([name, value]: [name: string, value: string | string[] | number | void]) =>
					(params[`${name}[${i}]`] = value)
			)
		);

		return this.scrobble(params, callback);
	}

	public search(
		params: LastFMTrackSearchParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMTrackSearchResponse> {
		return new LastFMApiRequest<LastFMTrackSearchResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.search'
			})
			.send(callback);
	}

	public unlove(params: LastFMTrackParams, callback?: LastFMUnknownFunction): Promise<void> {
		return new LastFMApiRequest<void>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.unlove',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public updateNowPlaying(
		params: LastFMTrackUpdateNowPlayingParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMUpdateNowPlayingResponse> {
		return new LastFMApiRequest<LastFMUpdateNowPlayingResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.updateNowPlaying',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}
}
