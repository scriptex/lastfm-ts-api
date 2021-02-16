import { Param, UnknownFunction, LastFMApiRequest } from './api-request';

export type RequestParams<T> = Record<string, Param | T>;

export class LastFM {
	public apiKey: string;
	public secret?: string;
	public sessionKey?: string;

	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		if (typeof apiKey !== 'string') {
			throw new TypeError('apiKey must be of type string');
		}

		this.apiKey = apiKey;

		if (secret !== undefined) {
			if (typeof secret !== 'string') {
				throw new TypeError('secret must be of type string');
			}

			this.secret = secret;
		}

		if (sessionKey !== undefined) {
			if (typeof sessionKey !== 'string') {
				throw new TypeError('sessionKey must be of type string');
			}

			this.sessionKey = sessionKey;
		}
	}
}

export interface AlbumAddTagsParams extends RequestParams<Param> {
	readonly tags: string | string[];
	readonly album: string;
	readonly artist: string;
}

export interface AlbumGetInfoParams extends RequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly lang: string;
	readonly album: string;
	readonly artist: string;
	readonly username: string;
	readonly autocorrect: 0 | 1;
}

export interface AlbumGetTagsParams extends RequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly user: string;
	readonly album: string;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface AlbumGetTopTagsParams extends RequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly album: string;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface AlbumRemoveTagParams extends RequestParams<Param> {
	readonly tag: string;
	readonly album: string;
	readonly artist: string;
}

export interface AlbumSearchParams extends RequestParams<number> {
	readonly page: number;
	readonly album: string;
	readonly limit: number;
}

export class LastFMAlbum extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public addTags(params: AlbumAddTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	public getInfo(params: AlbumGetInfoParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getInfo'
			})
			.send(callback);
	}

	public getTags(params: AlbumGetTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTags'
			})
			.send(callback);
	}

	public getTopTags(params: AlbumGetTopTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.getTopTags'
			})
			.send(callback);
	}

	public removeTag(params: AlbumRemoveTagParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	public search(params: AlbumSearchParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'album.search'
			})
			.send(callback);
	}
}

export interface ArtistAddTagsParams extends RequestParams<Param> {
	readonly tags: string | string[];
	readonly artist: string;
}

export interface ArtistGetCorrectionParams extends RequestParams<Param> {
	readonly artist: string;
}

export interface ArtistGetInfoParams extends RequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly lang: string;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
	readonly username: string;
}

export interface ArtistGetSimilarParams extends RequestParams<0 | 1 | void | number> {
	readonly mbid?: string;
	readonly limit: number;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface ArtistGetTagsParams extends RequestParams<0 | 1 | void> {
	readonly user: string;
	readonly mbid?: string;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface ArtistGetTopAlbumsParams extends RequestParams<0 | 1 | void | number> {
	readonly page: number;
	readonly mbid?: string;
	readonly limit: number;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface ArtistGetTopTagsParams extends RequestParams<0 | 1 | void> {
	readonly mbid?: string;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface ArtistGetTopTracksParams extends RequestParams<0 | 1 | void | number> {
	readonly page: number;
	readonly mbid?: string;
	readonly limit: number;
	readonly artist: string;
	readonly autocorrect: 0 | 1;
}

export interface ArtistRemoveTagParams extends RequestParams<Param> {
	readonly tag: string;
	readonly artist: string;
}

export interface ArtistSearchParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
	readonly artist: string;
}

export class LastFMArtist extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public addTags(params: ArtistAddTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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
		params: ArtistGetCorrectionParams,
		callback: UnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getCorrection'
			})
			.send(callback);
	}

	public getInfo(params: ArtistGetInfoParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getInfo'
			})
			.send(callback);
	}

	public getSimilar(params: ArtistGetSimilarParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getSimilar'
			})
			.send(callback);
	}

	public getTags(params: ArtistGetTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTags'
			})
			.send(callback);
	}

	public getTopAlbums(params: ArtistGetTopAlbumsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopAlbums'
			})
			.send(callback);
	}

	public getTopTags(params: ArtistGetTopTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(params: ArtistGetTopTracksParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.getTopTracks'
			})
			.send(callback);
	}

	public removeTag(params: ArtistRemoveTagParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	public search(params: ArtistSearchParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'artist.search'
			})
			.send(callback);
	}
}

export interface AuthGetMobileSessionParams extends RequestParams<Param> {
	readonly username: string;
	readonly password: string;
}

export interface AuthGetSessionParams extends RequestParams<Param> {
	readonly token: string;
}

export class LastFMAuth extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getMobileSession(
		params: AuthGetMobileSessionParams,
		callback: UnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'auth.getMobileSession'
			})
			.sign(this.secret)
			.send('POST', callback);
	}

	public getSession(params: AuthGetSessionParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'auth.getSession'
			})
			.sign(this.secret)
			.send(callback);
	}

	public getToken(callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set({
				api_key: this.apiKey,
				method: 'auth.getToken'
			})
			.sign(this.secret)
			.send(callback);
	}
}

export interface ChartGetTopArtistsParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
}

export interface ChartGetTopTagsParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
}

export interface ChartGetTopTracksParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
}

export class LastFMChart extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getTopArtists(
		params: ChartGetTopArtistsParams,
		callback: UnknownFunction
	): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(params: ChartGetTopTagsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(params: ChartGetTopTracksParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTracks'
			})
			.send(callback);
	}
}

export interface GeoGetTopArtistsParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
	readonly country: string;
}

export interface GeoGetTopTracksParams extends RequestParams<number> {
	readonly page: number;
	readonly limit: number;
	readonly country: string;
	readonly location: string;
}

export class LastFMGeo extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getTopArtists(params: GeoGetTopArtistsParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopArtists'
			})
			.send(callback);
	}

	public getTopTracks(params: GeoGetTopTracksParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'geo.getTopTracks'
			})
			.send(callback);
	}
}

export interface LibraryGetArtists extends RequestParams<number> {
	readonly user: string;
	readonly page: number;
	readonly limit: number;
}

export class LastFMLibrary extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getArtists(params: LibraryGetArtists, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'library.getArtists'
			})
			.send(callback);
	}
}

export interface TagGetInfoParams extends RequestParams<number> {
	readonly tag: string;
	readonly lang: string;
}

export class LastFMTag extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getInfo(params: TagGetInfoParams, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getInfo'
			})
			.send(callback);
	}

	/**
	 * Get similar to a tag
	 * @param {Object} params
	 * @param {string} params.tag - Tag to get similar to
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetSimilar(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getSimilar'
			})
			.send(callback);
	}

	/**
	 * Get top albums of a tag
	 * @param {Object} params
	 * @param {string} params.tag - Tag to get top albums of
	 * @param {number} [params.limit] - Number of albums to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetTopAlbums(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopAlbums'
			})
			.send(callback);
	}

	/**
	 * Get top artists of a tag
	 * @param {Object} params
	 * @param {string} params.tag - Tag to get top artists of
	 * @param {number} [params.limit] - Number of artists to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetTopArtists(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopArtists'
			})
			.send(callback);
	}

	/**
	 * Get top tags
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetTopTags(callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTags'
			})
			.send(callback);
	}

	/**
	 * Get top tracks of a tag
	 * @param {Object} params
	 * @param {string} params.tag - Tag to get top tracks of
	 * @param {number} [params.limit] - Number of tracks to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetTopTracks(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getTopTracks'
			})
			.send(callback);
	}

	/**
	 * Get weekly charts of a tag
	 * @param {Object} params
	 * @param {string} params.tag - Tag to get weekly charts of
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	tagGetWeeklyChartList(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'tag.getWeeklyChartList'
			})
			.send(callback);
	}

	/**
	 * Add tags to a track
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to add tags to
	 * @param {string} params.track - Track to add tags to
	 * @param {(string|string[])} params.tags - Tags to add to track
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackAddTags(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Get correction of a track and artist
	 * @param {Object} params
	 * @param {string} params.artist - Artist and whose track to get correction of
	 * @param {string} params.track - Track to get correction of
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackGetCorrection(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getCorrection'
			})
			.send(callback);
	}

	/**
	 * Get info of a track
	 * @param {Object} params
	 * @param {string} [params.artist] - Artist whose track to get info of. Required unless params.mbid is set.
	 * @param {string} [params.track] - Track to get info of. Required unless params.mbid is set.
	 * @param {string} [params.mbid] - MusicBrainz ID of track to get info of. Required unless params.artist and params.track are set.
	 * @param {(0|1)} [params.autocorrect] - Whether to correct misspelt artist and track names
	 * @param {string} [params.username] - User whose playcount and whether or not they have loved the track to include
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackGetInfo(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getInfo'
			})
			.send(callback);
	}

	/**
	 * Get similar to a track
	 * @param {Object} params
	 * @param {string} [params.artist] - Artist whose track to get similar to. Required unless params.mbid is set.
	 * @param {string} [params.track] - Track to get similar to. Required unless params.mbid is set.
	 * @param {string} [params.mbid] - MusicBrainz ID of track to get similar to. Required unless params.artist and params.track are set.
	 * @param {(0|1)} [params.autocorrect] - Whether to correct misspelt artist and track names
	 * @param {number} [params.limit] - Number of tracks to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackGetSimilar(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getSimilar'
			})
			.send(callback);
	}

	/**
	 * Get tags of a track added by a user
	 * @param {Object} params
	 * @param {string} [params.artist] - Artist whose track to get tags of. Required unless params.mbid is set.
	 * @param {string} [params.track] - Track to get tags of. Required unless params.mbid is set.
	 * @param {string} [params.mbid] - MusicBrainz ID of track to get tags of. Required unless params.artist and params.track are set.
	 * @param {string} params.user - User whose tags added to the track to get
	 * @param {(0|1)} [params.autocorrect] - Whether to correct misspelt artist and track names
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackGetTags(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTags'
			})
			.send(callback);
	}

	/**
	 * Get top tags of a track
	 * @param {Object} params
	 * @param {string} [params.artist] - Artist whose track to get top tags of. Required unless params.mbid is set.
	 * @param {string} [params.track] - Track to get top tags of. Required unless params.mbid is set.
	 * @param {string} [params.mbid] - MusicBrainz ID of track to get top tags of. Required unless params.artist and params.track are set.
	 * @param {(0|1)} [params.autocorrect] - Whether to correct misspelt artist and track names
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackGetTopTags(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.getTopTags'
			})
			.send(callback);
	}

	/**
	 * Love a track
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to love
	 * @param {string} params.track - Track to love
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackLove(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Remove tag from a track
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to remove tag from
	 * @param {string} params.track - Track to remove tag from
	 * @param {string} params.tag - Tag to remove from track
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackRemoveTag(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Scrobble a track
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to scrobble
	 * @param {string} params.track - Track to scobble
	 * @param {string} [params.album] - Album the track to scrobble is from
	 * @param {string} [params.albumArist] - Artist whose album the track to scrobble is from
	 * @param {number} params.timestamp - Timestamp to scrobble track at
	 * @param {number} [params.trackNumber] - Number of track to scrobble on the album
	 * @param {number} [params.duration] - Length of the track to scrobble in seconds
	 * @param {(0|1)} [params.chosenByUser] - Whether the user chose the track to scrobble
	 * @param {string} [params.streamId] - Stream ID if track to scrobble is from Last.Fm radio
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackScrobble(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Scrobble many tracks
	 * @param {Object[]} paramsArr
	 * @param {string} paramsArr[].artist - Artist whose track to scrobble
	 * @param {string} paramsArr[].track - Track to scobble
	 * @param {string} [paramsArr[].album] - Album the track to scrobble is from
	 * @param {string} [paramsArr[].albumArist] - Artist whose album the track to scrobble is from
	 * @param {number} paramsArr[].timestamp - Timestamp to scrobble track at
	 * @param {number} [paramsArr[].trackNumber] - Number of track to scrobble on the album
	 * @param {number} [paramsArr[].duration] - Length of the track to scrobble in seconds
	 * @param {(0|1)} [paramsArr[].chosenByUser] - Whether the user chose the track to scrobble
	 * @param {string} [paramsArr.streamId] - Stream ID if track to scrobble is from Last.Fm radio
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackScrobbleMany(paramsArr, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		const params = {};

		paramsArr.forEach((paramsObj, i) =>
			Object.entries(paramsObj).forEach(([name, value]) => (params[`${name}[${i}]`] = value))
		);

		return this.trackScrobble(params, callback);
	}

	/**
	 * Search for a track
	 * @param {Object} params
	 * @param {string} [params.artist] - Artist whose track to search for
	 * @param {string} params.track - Track to search for
	 * @param {number} [params.limit] - Number of tracks to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackSearch(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'track.search'
			})
			.send(callback);
	}

	/**
	 * Unlove a track
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to unlove
	 * @param {string} params.track - Track to unlove
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackUnlove(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Update now playing
	 * @param {Object} params
	 * @param {string} params.artist - Artist whose track to update now playing with
	 * @param {string} params.track - Track to update now playing with
	 * @param {string} [params.album] - Album the track to update now playing with is from
	 * @param {string} [params.albumArist] - Artist whose album the track to update now playing with is from
	 * @param {number} [params.trackNumber] - Number of track to update now playing with on the album
	 * @param {number} [params.duration] - Length of the track to update now playing with in seconds
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	trackUpdateNowPlaying(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
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

	/**
	 * Get friends of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get friends of
	 * @param {(0|1)} [params.recenttracks] - Whether to include recent tracks of friends
	 * @param {number} [params.limit] - Number of friends to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetFriends(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getFriends'
			})
			.send(callback);
	}

	/**
	 * Get info of a user
	 * @param {Object} [params]
	 * @param {string} [params.user] - User to get info of
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetInfo(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		callback = callback === undefined ? (typeof params === 'function' ? params : undefined) : callback;
		params = typeof params === 'object' ? params : {};

		return new LastFMApiRequest().set(params).set({
			api_key: this.apiKey,
			method: 'user.getInfo'
		});

		if (!params.user) {
			LastFMApiRequest.set({ sk: this.sessionKey }).sign(this.secret);
		}

		return LastFMApiRequest.send(params.user ? 'GET' : 'POST', callback) || this;
	}

	/**
	 * Get loved tracks of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get loved tracks of
	 * @param {number} [params.limit] - Number of tracks to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetLovedTracks(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getLovedTracks'
			})
			.send(callback);
	}

	/**
	 * Get items of a tag added by a user
	 * @param {Object} params
	 * @param {string} params.user - User whose added tag to get items of
	 * @param {string} params.tag - Tag to get items of
	 * @param {("artist"|"album"|"track")} params.taggingtype - Type of tag to get items of
	 * @param {number} [params.limit] - Number of items to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetPersonalTags(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getPersonalTags'
			})
			.send(callback);
	}

	/**
	 * Get recent tracks of a user
	 * @param {Object} params
	 * @param {string} params.user - User whose recent tracks to get
	 * @param {(0|1)} [params.extended] - Whether to include extended data of the artist and whether the user has loved the track or not
	 * @param {string} [params.from] - Timestamp to get tracks from
	 * @param {string} [params.to] - Timestamp to get tracks to
	 * @param {number} [params.limit] - Number of tracks to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetRecentTracks(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getRecentTracks'
			})
			.send(callback);
	}

	/**
	 * Get top albums of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get top albums of
	 * @param {("7day"|"1month"|"3month"|"6month"|"12month"|"overall")} [params.period] - Time period to get top albums of
	 * @param {number} [params.limit] - Number of albums to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetTopAlbums(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopAlbums'
			})
			.send(callback);
	}

	/**
	 * Get top artists of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get top artists of
	 * @param {("7day"|"1month"|"3month"|"6month"|"12month"|"overall")} [params.period] - Time period to get top artists of
	 * @param {number} [params.limit] - Number of artists to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetTopArtists(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopArtists'
			})
			.send(callback);
	}

	/**
	 * Get top tags of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get top tags of
	 * @param {number} [params.limit] - Number of tags to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetTopTags(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTags'
			})
			.send(callback);
	}

	/**
	 * Get top tracks of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get top tracks of
	 * @param {("7day"|"1month"|"3month"|"6month"|"12month"|"overall")} [params.period] - Time period to get top tracks of
	 * @param {number} [params.limit] - Number of tracks to get per page
	 * @param {number} [params.page] - Page number to get
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetTopTracks(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getTopTracks'
			})
			.send(callback);
	}

	/**
	 * Get weekly album chart of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get weekly album chart of
	 * @param {string} [params.from] - Timestamp to get weekly album chart from
	 * @param {string} [params.to] - Timestamp to get weekly album chart to
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetWeeklyAlbumChart(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyAlbumChart'
			})
			.send(callback);
	}

	/**
	 * Get weekly artist chart of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get weekly artist chart of
	 * @param {string} [params.from] - Timestamp to get weekly artist chart from
	 * @param {string} [params.to] - Timestamp to get weekly artist chart to
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetWeeklyArtistChart(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyArtistChart'
			})
			.send(callback);
	}

	/**
	 * Get weekly charts of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get weekly charts of
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetWeeklyChartList(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyChartList'
			})
			.send(callback);
	}

	/**
	 * Get weekly track chart of a user
	 * @param {Object} params
	 * @param {string} params.user - User to get weekly track chart of
	 * @param {string} [params.from] - Timestamp to get weekly track chart from
	 * @param {string} [params.to] - Timestamp to get weekly track chart to
	 * @param {callback} [callback]
	 * @returns {(Promise|LastFm)}
	 */

	userGetWeeklyTrackChart(params, callback: UnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'user.getWeeklyTrackChart'
			})
			.send(callback);
	}
}
