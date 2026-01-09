export type LastFMParam = string | string[];
export type LastFMParams<T> = Record<string, LastFMParam | T>;
export type LastFMVoidOrNumber = void | number;
export type LastFMBooleanNumber = 0 | 1;
export type LastFMUnknownFunction = (...args: unknown[]) => unknown;
export type LastFMRequestParams<T> = Record<string, LastFMParam | T>;
export type LastFMBooleanNumberOrVoid = LastFMBooleanNumber | void;

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
				streamable: {
					fulltrack: string;
					'#text': string;
				};
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

export type LastFMArtistParams = LastFMRequestParams<LastFMParam> &
	Readonly<{
		artist: string;
	}>;

export type LastFMArtistAddTagsParams = LastFMRequestParams<LastFMParam> &
	LastFMArtistParams &
	Readonly<{
		tags: string | string[];
	}>;

export type LastFMArtistGetInfoParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	Readonly<{
		lang?: string;
		mbid?: string;
		artist: string;
		username?: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistGetSimilarParams = LastFMRequestParams<LastFMVoidOrNumber> &
	Readonly<{
		mbid?: string;
		limit?: number;
		artist: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistGetTagsParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	Readonly<{
		mbid?: string;
		user?: string;
		artist: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistGetTopAlbumsParams = LastFMRequestParams<LastFMVoidOrNumber> &
	Readonly<{
		mbid?: string;
		page?: number;
		limit?: number;
		artist: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistGetTopTagsParams = LastFMRequestParams<LastFMBooleanNumberOrVoid> &
	Readonly<{
		mbid?: string;
		artist: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistGetTopTracksParams = LastFMRequestParams<LastFMVoidOrNumber> &
	Readonly<{
		mbid?: string;
		page?: number;
		limit?: number;
		artist: string;
		autocorrect?: 0 | 1;
	}>;

export type LastFMArtistRemoveLastFMTagParams = LastFMRequestParams<LastFMParam> &
	Readonly<{
		tag: string;
		artist: string;
	}>;

export type LastFMArtistSearchParams = LastFMRequestParams<number | void> &
	Readonly<{
		page?: number;
		limit?: number;
		artist: string;
	}>;

export type LastFMArtistGetCorrectionResponse = Readonly<{
	corrections: {
		correction: {
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			'@attr': {
				index: string;
			};
		};
	};
}>;

export type LastFMArtistGetInfoResponse = Readonly<{
	artist: {
		name: string;
		mbid: string;
		url: string;
		image: Array<{
			'#text': string;
			size: string;
		}>;
		streamable: LastFMBooleanNumber;
		ontour: LastFMBooleanNumber;
		stats: {
			listeners: string;
			playcount: string;
		};
		similar: {
			artist: Array<{
				name: string;
				url: string;
				image: Array<{
					'#text': string;
					size: string;
				}>;
			}>;
		};
		tags: {
			tag: Array<{
				name: string;
				url: string;
			}>;
		};
		bio: {
			links: {
				link: {
					'#text': string;
					rel: string;
					href: string;
				};
			};
			published: string;
			summary: string;
			content: string;
		};
	};
}>;

export type LastFMArtistGetSimilarResponse = Readonly<{
	similarartists: {
		artist: Array<{
			name: string;
			mbid: string;
			match: LastFMBooleanNumber;
			url: string;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			streamable: LastFMBooleanNumber;
		}>;
		'@attr': {
			artist: string;
		};
	};
}>;

export type LastFMArtistGetTagsResponse = Readonly<{
	tags: {
		tag: Array<{
			name: string;
			url: string;
		}>;
		'@attr': {
			artist: string;
		};
	};
}>;

export type LastFMArtistGetTopAlbumsResponse = Readonly<{
	topalbums: {
		album: Array<{
			name: string;
			playcount: number;
			mbid: string;
			url: string;
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
		}>;
		'@attr': {
			artist: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMArtistGetTopTagsResponse = Readonly<{
	toptags: {
		tag: Array<{
			count: number;
			name: string;
			url: string;
		}>;
		'@attr': {
			artist: string;
		};
	};
}>;

export type LastFMArtistGetTopTracksResponse = Readonly<{
	toptracks: {
		track: Array<{
			name: string;
			playcount: string;
			listeners: string;
			mbid: string;
			url: string;
			streamable: LastFMBooleanNumber;
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			'@attr': {
				rank: string;
			};
		}>;
		'@attr': {
			artist: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMArtistSearchResponse = Readonly<{
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
		artistmatches: {
			artist: Array<{
				name: string;
				listeners: string;
				mbid: string;
				url: string;
				streamable: LastFMBooleanNumber;
				image: Array<{
					'#text': string;
					size: string;
				}>;
			}>;
		};
		'@attr': {
			for: string;
		};
	};
}>;

export type LastFMAuthGetMobileSessionParams = LastFMRequestParams<LastFMParam> &
	Readonly<{
		username: string;
		password: string;
	}>;

export type LastFMAuthGetSessionParams = LastFMRequestParams<LastFMParam> &
	Readonly<{
		token: string;
	}>;

export type LastFMAuthSessionResponse = Readonly<{
	session: {
		name: string;
		key: string;
		subscriber: LastFMBooleanNumber;
	};
}>;

export type LastFMAuthGetTokenResponse = Readonly<{
	token: string;
}>;

export type LastFMChartParams = LastFMRequestParams<number | void> &
	Readonly<{
		page?: number;
		limit?: number;
	}>;

export type LastFMChartGetTopArtistsResponse = Readonly<{
	artists: {
		artist: Array<{
			name: string;
			playcount: string;
			listeners: string;
			mbid: string;
			url: string;
			streamable: LastFMBooleanNumber;
			image: Array<{
				'#text': string;
				size: string;
			}>;
		}>;
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMChartGetTopTagsResponse = Readonly<{
	tags: {
		tag: Array<{
			name: string;
			url: string;
			reach: string;
			taggings: string;
			streamable: LastFMBooleanNumber;
			wiki: {
				published?: string;
				summary?: string;
			};
		}>;
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMChartGetTopTracksResponse = Readonly<{
	tracks: {
		track: Array<{
			name: string;
			duration: string;
			playcount: string;
			listeners: string;
			mbid: string;
			url: string;
			streamable: {
				'#text': string;
				fulltrack: string;
			};
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
		}>;
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMGeoGetTopArtistsParams = LastFMRequestParams<number | void> &
	Readonly<{
		page?: number;
		limit?: number;
		country: string;
	}>;

export type LastFMGeoGetTopTracksParams = LastFMGeoGetTopArtistsParams &
	Readonly<{
		location?: string;
	}>;

export type LastFMGeoGetTopArtistsResponse = Readonly<{
	topartists: {
		artist: Array<{
			name: string;
			listeners: string;
			mbid: string;
			url: string;
			streamable: LastFMBooleanNumber;
			image: Array<{
				'#text': string;
				size: string;
			}>;
		}>;
		'@attr': {
			country: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMGeoGetTopTracksResponse = Readonly<{
	tracks: {
		track: Array<{
			name: string;
			duration: string;
			listeners: string;
			mbid: string;
			url: string;
			streamable: {
				'#text': string;
				fulltrack: string;
			};
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			'@attr': {
				rank: string;
			};
		}>;
		'@attr': {
			country: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMLibraryGetArtistsParams = LastFMRequestParams<number | void> &
	Readonly<{
		user: string;
		page?: number;
		limit?: number;
	}>;

export type LastFMLibraryGetArtistsResponse = Readonly<{
	artists: {
		artist: Array<{
			tagcount: string;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			url: string;
			playcount: string;
			name: string;
			streamable: LastFMBooleanNumber;
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMTagParams = LastFMRequestParams<number | void> &
	Readonly<{
		tag: string;
	}>;

export type LastFMTagOptionalParams = Readonly<{
	page?: number;
	limit?: number;
}>;

export type LastFMTagGetInfoParams = LastFMRequestParams<number | void> &
	LastFMTagParams &
	Readonly<{
		lang?: string;
	}>;

export type LastFMTagGetTopParams = LastFMRequestParams<number | void> & LastFMTagParams & LastFMTagOptionalParams;

export type LastFMTagGetInfoResponse = Readonly<{
	tag: {
		name: string;
		total: number;
		reach: number;
		wiki: {
			summary: string;
			content: string;
		};
	};
}>;

export type LastFMTagGetSimilarResponse = Readonly<{
	similartags: {
		tag: Array<{
			url: string;
			name: string;
		}>;
		'@attr': {
			tag: string;
		};
	};
}>;

export type LastFMTagGetTopAlbumsResponse = Readonly<{
	albums: {
		album: Array<{
			name: string;
			mbid: string;
			url: string;
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			'@attr': {
				rank: string;
			};
		}>;
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMTagGetTopArtistsResponse = Readonly<{
	topartists: {
		artist: Array<{
			name: string;
			mbid: string;
			url: string;
			streamable: LastFMBooleanNumber;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			'@attr': {
				rank: string;
			};
		}>;
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMTagGetTopTagsResponse = Readonly<{
	toptags: {
		'@attr': {
			offset: number;
			num_res: number;
			total: number;
		};
		tag: Array<{
			name: string;
			count: number;
			reach: number;
		}>;
	};
}>;

export type LastFMTagGetTopTracksResponse = Readonly<{
	tracks: {
		track: Array<{
			name: string;
			duration: string;
			mbid: string;
			url: string;
			streamable: {
				'#text': string;
				fulltrack: string;
			};
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			'@attr': {
				rank: string;
			};
		}>;
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMTagGetWeeklyChartListResponse = Readonly<{
	weeklychartlist: {
		chart: Array<{
			'#text': string;
			from: string;
			to: string;
		}>;
		'@attr': {
			tag: string;
		};
	};
}>;

export type LastFMTrackParams = LastFMRequestParams<number | void> &
	Readonly<{
		track: string;
		artist: string;
	}>;

export type LastFMTrackOptionalParams = Readonly<{
	mbid?: string;
	autocorrect?: 0 | 1;
}>;

export type LastFMTrackAddTagsParams = LastFMTrackParams &
	Readonly<{
		tags: string | string[];
	}>;

export type LastFMTrackGetInfoParams = LastFMTrackParams &
	LastFMTrackOptionalParams &
	Readonly<{
		username?: string;
	}>;

export type LastFMTrackGetSimilarParams = LastFMTrackParams &
	LastFMTrackOptionalParams &
	Readonly<{
		limit?: number;
	}>;

export type LastFMTrackGetTagsParams = LastFMTrackParams &
	LastFMTrackOptionalParams &
	Readonly<{
		user?: string;
	}>;

export type LastFMTrackGetTopTagsParams = LastFMTrackParams & LastFMTrackOptionalParams;

export type LastFMTrackRemoveTagParams = LastFMTrackParams &
	Readonly<{
		tag: string;
	}>;

export type LastFMTrackScrobbleParams = LastFMTrackParams &
	Readonly<{
		timestamp: number;
		album?: string;
		context?: string;
		streamId?: string;
		chosenByUser?: 0 | 1;
		trackNumber?: number;
		mbid?: string;
		albumArtist?: string;
		duration?: number;
	}>;

export type LastFMTrackSearchParams = LastFMRequestParams<number | void> &
	Readonly<{
		page?: number;
		limit?: number;
		track: string;
		artist?: string;
	}>;

export type LastFMTrackUpdateNowPlayingParams = LastFMTrackParams &
	Readonly<{
		mbid?: string;
		album?: string;
		context?: string;
		duration?: number;
		trackNumber?: number;
		albumArtist?: string;
	}>;

export type LastFMTrackGetCorrectionResponse = Readonly<{
	corrections: {
		correction: {
			track: {
				name: string;
				url: string;
				artist: {
					name: string;
					mbid: string;
					url: string;
				};
			};
			'@attr': {
				index: string;
				artistcorrected: LastFMBooleanNumber;
				trackcorrected: LastFMBooleanNumber;
			};
		};
	};
}>;

export type LastFMTrackGetInfoResponse = Readonly<{
	track: {
		name: string;
		mbid: string;
		url: string;
		duration: string;
		streamable: {
			'#text': string;
			fulltrack: string;
		};
		listeners: string;
		playcount: string;
		artist: {
			name: string;
			mbid: string;
			url: string;
		};
		album: {
			artist: string;
			title: string;
			mbid: string;
			url: string;
			image: Array<{
				size: string;
				'#text': string;
			}>;
			'@attr': {
				position: string;
			};
		};
		toptags: {
			tag: Array<{
				name: string;
				url: string;
			}>;
		};
		wiki: {
			published: string;
			summary: string;
			content: string;
		};
	};
}>;

export type LastFMTrackGetSimilarResponse = Readonly<{
	similartracks: {
		track: Array<{
			name: string;
			playcount: number;
			mbid: string;
			match: string;
			url: string;
			streamable: {
				'#text': string;
				fulltrack: string;
			};
			duration: number;
			artist: {
				name: string;
				mbid: string;
				url: string;
			};
			image: Array<{
				size: string;
				'#text': string;
			}>;
		}>;
		'@attr': {
			artist: string;
		};
	};
}>;

export type LastFMTrackGetTagsResponse = Readonly<{
	tags: {
		tag: Array<{
			name: string;
			url: string;
		}>;
		'@attr': {
			artist: string;
			track: string;
		};
	};
}>;

export type LastFMTrackGetTopTagsResponse = Readonly<{
	toptags: {
		tag: Array<{
			count: number;
			name: string;
			url: string;
		}>;
		'@attr': {
			artist: string;
			track: string;
		};
	};
}>;

// This might not be the correct shape of the response
export type LastFMTrackScroblleResponse = Readonly<{
	scrobbles: {
		scrobble: Array<{
			track: {
				corrected: LastFMBooleanNumber;
				'#text': string;
			};
			artist: {
				corrected: LastFMBooleanNumber;
				'#text': string;
			};
			album: {
				corrected: LastFMBooleanNumber;
				'#text': string;
			};
			albumArtist: {
				corrected: LastFMBooleanNumber;
				'#text': string;
			};
			timestamp: number;
			ignoredMessage: {
				code: number;
				'#text': string;
			};
		}>;
		'@attr': {
			accepted: number;
			ignored: number;
		};
	};
}>;

export type LastFMTrackSearchResponse = Readonly<{
	results: {
		'opensearch:Query': {
			'#text': string;
			role: string;
			startPage: string;
		};
		'opensearch:totalResults': string;
		'opensearch:startIndex': string;
		'opensearch:itemsPerPage': string;
		trackmatches: {
			track: Array<{
				name: string;
				artist: string;
				url: string;
				streamable: LastFMBooleanNumber;
				listeners: string;
				image: Array<{
					size: string;
					'#text': string;
				}>;
				mbid: string;
			}>;
		};
		'@attr': {
			for: string;
		};
	};
}>;

// This might not be the correct shape of the response
export type LastFMUpdateNowPlayingResponse = Readonly<{
	nowplaying: {
		track: {
			corrected: LastFMBooleanNumber;
			'#text': string;
		};
		artist: {
			corrected: LastFMBooleanNumber;
			'#text': string;
		};
		album: {
			corrected: LastFMBooleanNumber;
			'#text': string;
		};
		albumArtist: {
			corrected: LastFMBooleanNumber;
			'#text': string;
		};
		ignoredMessage: {
			code: number;
			'#text': string;
		};
	};
}>;

export type LastFMUserParams = LastFMRequestParams<LastFMParam | number | void | boolean> &
	Readonly<{
		user?: string;
	}>;

export type LastFMUserOptionalParams = Readonly<{
	page?: number;
	limit?: number;
}>;

export type LastFMUserGetFriendsParams = LastFMUserParams &
	LastFMUserOptionalParams &
	Readonly<{
		recenttracks?: boolean;
	}>;

export type LastFMUserGetLovedTracksParams = LastFMUserParams & LastFMUserOptionalParams;

export type LastFMUserGetPersonalTagsParams = LastFMUserParams &
	LastFMUserOptionalParams &
	Readonly<{
		tag: string;
		taggingtype: 'artist' | 'album' | 'track';
	}>;

export type LastFMUserGetRecentTracksParams = LastFMUserParams &
	LastFMUserOptionalParams &
	Readonly<{
		to?: string;
		from?: string;
		extended?: 0 | 1;
	}>;

export type LastFMUserGetTopParams = LastFMUserParams &
	LastFMUserOptionalParams &
	Readonly<{
		period?: 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';
	}>;

export type LastFMUserGetTopTagsParams = LastFMRequestParams<string | number | void> &
	Readonly<{
		user: string;
		limit?: number;
	}>;

export type LastFMUserGetWeeklyParams = LastFMRequestParams<string | number | void> &
	Readonly<{
		to?: string;
		user: string;
		from?: string;
	}>;

export type LastFMUserGetFriendsResponse = Readonly<{
	friends: {
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
		user: Array<{
			name: string;
			url: string;
			country: string;
			playlists: string;
			playcount: string;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			registered: {
				unixtime: string;
				'#text': string;
			};
			realname: string;
			subscriber: LastFMBooleanNumber;
			bootstrap: LastFMBooleanNumber;
			type: string;
		}>;
	};
}>;

export type LastFMUserGetInfoResponse = Readonly<{
	user: {
		name: string;
		age: string;
		subscriber: LastFMBooleanNumber;
		realname: string;
		bootstrap: LastFMBooleanNumber;
		playcount: string;
		artist_count: string;
		playlists: string;
		track_count: string;
		album_count: string;
		image: Array<{
			'#text': string;
			size: string;
		}>;
		registered: {
			unixtime: string;
			'#text': number;
		};
		country: string;
		gender: string;
		url: string;
		type: string;
	};
}>;

export type LastFMUserGetLovedTracksResponse = Readonly<{
	lovedtracks: {
		track: Array<{
			artist: {
				url: string;
				name: string;
				mbid: string;
			};
			date: {
				uts: string;
				'#text': string;
			};
			mbid: string;
			url: string;
			name: string;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			streamable: {
				fulltrack: string;
				'#text': string;
			};
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetPersonalTagsResponse = Readonly<{
	taggings: {
		artists: {
			artist: Array<{
				name: string;
				mbid: string;
				url: string;
				streamable: LastFMBooleanNumber;
				image: Array<{
					'#text': string;
					size: string;
				}>;
			}>;
		};
		'@attr': {
			user: string;
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetRecentTracksResponse = Readonly<{
	recenttracks: {
		track: Array<{
			artist: {
				mbid: string;
				'#text': string;
			};
			streamable: LastFMBooleanNumber;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			album: {
				mbid: string;
				'#text': string;
			};
			name: string;
			url: string;
			date: {
				uts: string;
				'#text': string;
			};
			'@attr'?: {
				nowplaying: 'true';
			};
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetTopAlbumsResponse = Readonly<{
	topalbums: {
		album: Array<{
			artist: {
				url: string;
				name: string;
				mbid: string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			url: string;
			playcount: string;
			'@attr': {
				rank: string;
			};
			name: string;
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetTopArtistsResponse = Readonly<{
	topartists: {
		artist: Array<{
			streamable: LastFMBooleanNumber;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			url: string;
			playcount: string;
			'@attr': {
				rank: string;
			};
			name: string;
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetTopTagsResponse = Readonly<{
	toptags: {
		tag: Array<{
			name: string;
			count: string;
			url: string;
		}>;
		'@attr': {
			user: string;
		};
	};
}>;

export type LastFMUserGetTopTracksResponse = Readonly<{
	toptracks: {
		track: Array<{
			streamable: {
				fulltrack: string;
				'#text': string;
			};
			mbid: string;
			name: string;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			artist: {
				url: string;
				name: string;
				mbid: string;
			};
			url: string;
			duration: string;
			'@attr': {
				rank: string;
			};
			playcount: string;
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;

export type LastFMUserGetWeeklyAlbumChartResponse = Readonly<{
	weeklyalbumchart: {
		album: Array<{
			artist: {
				mbid: string;
				'#text': string;
			};
			mbid: string;
			url: string;
			name: string;
			'@attr': {
				rank: string;
			};
			playcount: string;
		}>;
		'@attr': {
			from: string;
			user: string;
			to: string;
		};
	};
}>;

export type LastFMUserGetWeeklyArtistChartResponse = Readonly<{
	weeklyartistchart: {
		artist: Array<{
			mbid: string;
			url: string;
			name: string;
			'@attr': {
				rank: string;
			};
			playcount: string;
		}>;
		'@attr': {
			from: string;
			user: string;
			to: string;
		};
	};
}>;

export type LastFMUserGetWeeklyChartListResponse = Readonly<{
	weeklychartlist: {
		chart: Array<{
			'#text': string;
			from: string;
			to: string;
		}>;
		'@attr': {
			user: string;
		};
	};
}>;

export type LastFMUserGetWeeklyTrackChartResponse = Readonly<{
	weeklytrackchart: {
		track: Array<{
			artist: {
				mbid: string;
				'#text': string;
			};
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			url: string;
			name: string;
			'@attr': {
				rank: string;
			};
			playcount: string;
		}>;
		'@attr': {
			from: string;
			user: string;
			to: string;
		};
	};
}>;

export type OptionalConfig = {
	hostname: string;
	path: string;
};
