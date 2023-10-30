import { LastFM } from './base';
import { LastFMApiRequest } from './api-request';
import { LastFMUnknownFunction, LastFMLibraryGetArtistsParams, LastFMLibraryGetArtistsResponse } from './types';

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
