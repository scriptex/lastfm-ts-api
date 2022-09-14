import { LastFM } from './base';
import { LastFMApiRequest, LastFMRequestParams, LastFMUnknownFunction } from './api-request';

export interface LastFMChartParams extends LastFMRequestParams<number | void> {
	readonly page?: number;
	readonly limit?: number;
}

export class LastFMChart extends LastFM {
	constructor(apiKey: string, secret?: string, sessionKey?: string) {
		super(apiKey, secret, sessionKey);
	}

	public getTopArtists(params: LastFMChartParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopArtists'
			})
			.send(callback);
	}

	public getTopTags(params: LastFMChartParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTags'
			})
			.send(callback);
	}

	public getTopTracks(params: LastFMChartParams, callback: LastFMUnknownFunction): Promise<LastFMApiRequest> | void {
		return new LastFMApiRequest()
			.set(params)
			.set({
				api_key: this.apiKey,
				method: 'chart.getTopTracks'
			})
			.send(callback);
	}
}
