import { LastFM } from './base';
import { LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMTrackParams extends LastFMRequestParams<number | void> {
	readonly track: string;
	readonly artist: string;
}

export interface LastFMTrackOptionalParams {
	readonly mbid?: string;
	readonly autocorrect?: 0 | 1;
}

export interface LastFMTrackAddTags extends LastFMTrackParams {
	readonly tags: string | string[];
}

export interface LastFMTrackGetInfo extends LastFMTrackParams, LastFMTrackOptionalParams {
	readonly username?: string;
}

export interface LastFMTrackGetSimilar extends LastFMTrackParams, LastFMTrackOptionalParams {
	readonly limit?: number;
}

export interface LastFMTrackGetTags extends LastFMTrackParams, LastFMTrackOptionalParams {
	readonly user?: string;
}

export interface LastFMTrackGetTopTags extends LastFMTrackParams, LastFMTrackOptionalParams {}

export interface LastFMTrackRemoveTag extends LastFMTrackParams {
	readonly tag: string;
}

export interface LastFMTrackScrobble extends LastFMTrackParams {
	readonly timestamp?: number;
	readonly mbid?: string;
	readonly album?: string;
	readonly context?: string;
	readonly streamId?: string;
	readonly duration?: number;
	readonly chosenByUser?: 0 | 1;
	readonly trackNumber?: number;
	readonly albumArtist?: string;
}

export interface LastFMTrackSearch extends LastFMRequestParams<number | void> {
	readonly page?: number;
	readonly limit?: number;
	readonly track: string;
	readonly artist?: string;
}

export interface LastFMTrackUpdateNowPlaying extends LastFMTrackParams {
	readonly mbid?: string;
	readonly album?: string;
	readonly context?: string;
	readonly duration?: number;
	readonly trackNumber?: number;
	readonly albumArtist?: string;
}

export class LastFMTrack extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public addTags(params: LastFMTrackAddTags, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.addTags',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getCorrection(params: LastFMTrackParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getCorrection'
			})
			.send(callback);
	}

	public getInfo(params: LastFMTrackGetInfo, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getInfo'
			})
			.send(callback);
	}

	public getSimilar(
		params: LastFMTrackGetSimilar,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getSimilar'
			})
			.send(callback);
	}

	public getTags(params: LastFMTrackGetTags, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTags'
			})
			.send(callback);
	}

	public getTopTags(
		params: LastFMTrackGetTopTags,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTopTags'
			})
			.send(callback);
	}

	public love(params: LastFMTrackParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.love',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public removeTag(params: LastFMTrackRemoveTag, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.removeTag',
				sk: this.sessionKey
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public scrobble(params: LastFMTrackScrobble, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
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
		paramsArr: LastFMTrackScrobble[],
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		const params: any = {};

		paramsArr.forEach((paramsObj: LastFMTrackScrobble, i: number) =>
			Object.entries(paramsObj).forEach(
				([name, value]: [name: string, value: string | string[] | number | void]) =>
					(params[`${name}[${i}]`] = value)
			)
		);

		return this.scrobble(params, callback);
	}

	public search(params: LastFMTrackSearch, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.search'
			})
			.send(callback);
	}

	public unlove(params: LastFMTrackParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
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
		params: LastFMTrackUpdateNowPlaying,
		callback: LastFMUnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
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
