// @ts-nocheck

import { config } from 'dotenv';

import {
	LastFMGeo,
	LastFMTag,
	LastFMUser,
	LastFMAlbum,
	LastFMChart,
	LastFMTrack,
	LastFMArtist,
	LastFMLibrary
} from '../dist/index.js';

config();

const API_KEY = process.env.LAST_FM_API_KEY;

const geo = new LastFMGeo(API_KEY);
const tag = new LastFMTag(API_KEY);
const user = new LastFMUser(API_KEY);
const album = new LastFMAlbum(API_KEY);
const chart = new LastFMChart(API_KEY);
const track = new LastFMTrack(API_KEY);
const artist = new LastFMArtist(API_KEY);
const library = new LastFMLibrary(API_KEY);

const print = r => console.log(JSON.stringify(r, null, 2));

geo.getTopArtists({ country: 'Bulgaria', limit: 2 }).then(print).catch(console.error);
geo.getTopTracks({ country: 'Bulgaria', limit: 2 }).then(print).catch(console.error);

tag.getInfo({ tag: 'techno', limit: 2 }).then(print).catch(console.error);
tag.getSimilar({ tag: 'techno', limit: 2 }).then(print).catch(console.error);
tag.getTopAlbums({ tag: 'techno', limit: 2 }).then(print).catch(console.error);
tag.getTopArtists({ tag: 'techno', limit: 2 }).then(print).catch(console.error);
tag.getTopTags().then(print).catch(console.error);
tag.getTopTracks({ tag: 'techno', limit: 2 }).then(print).catch(console.error);
tag.getWeeklyChartList({ tag: 'techno' }).then(print).catch(console.error);

user.getFriends({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getInfo({ user: 'scriptex' }).then(print).catch(console.error);
user.getLovedTracks({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'album', tag: 'techno', limit: 2 })
	.then(print)
	.catch(console.error);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'artist', tag: 'techno', limit: 2 })
	.then(print)
	.catch(console.error);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'track', tag: 'techno', limit: 2 })
	.then(print)
	.catch(console.error);
user.getRecentTracks({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getTopAlbums({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getTopArtists({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getTopTags({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getTopTracks({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getWeeklyAlbumChart({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getWeeklyArtistChart({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
user.getWeeklyChartList({ user: 'scriptex' }).then(print).catch(console.error);
user.getWeeklyTrackChart({ user: 'scriptex' }).then(print).catch(console.error);

album.getInfo({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print).catch(console.error);
album.getTags({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print).catch(console.error);
album.getTopTags({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print).catch(console.error);
album.search({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print).catch(console.error);

chart.getTopArtists({ limit: 2 }).then(print).catch(console.error);
chart.getTopTags({ limit: 2 }).then(print).catch(console.error);
chart.getTopTracks({ limit: 2 }).then(print).catch(console.error);

track.getCorrection({ track: 'Firestarter', artist: 'The Prodigy' }).then(print).catch(console.error);
track.getInfo({ track: 'Firestarter', artist: 'The Prodigy' }).then(print).catch(console.error);
track.getSimilar({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
track.getTags({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
track.getTopTags({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
track.search({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);

artist.getCorrection({ artist: 'The Prodigy' }).then(print).catch(console.error);
artist.getInfo({ artist: 'The Prodigy' }).then(print).catch(console.error);
artist.getSimilar({ artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
artist.getTags({ artist: 'The Prodigy' }).then(print).catch(console.error);
artist.getTopAlbums({ artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
artist.getTopTags({ artist: 'The Prodigy' }).then(print).catch(console.error);
artist.getTopTracks({ artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);
artist.search({ artist: 'The Prodigy', limit: 2 }).then(print).catch(console.error);

library.getArtists({ user: 'scriptex', limit: 2 }).then(print).catch(console.error);
