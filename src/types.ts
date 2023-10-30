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
