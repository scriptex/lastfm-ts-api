import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
import { LastFMUnknownFunction, LastFMLibraryGetArtistsParams, LastFMLibraryGetArtistsResponse } from './types.js';

export class LastFMLibrary extends LastFM {
	public getArtists(
		params: LastFMLibraryGetArtistsParams,
		callback?: LastFMUnknownFunction
	): Promise<LastFMLibraryGetArtistsResponse> {
		return new LastFMApiRequest<LastFMLibraryGetArtistsResponse>()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'library.getArtists'
			})
			.send(callback);
	}
}
