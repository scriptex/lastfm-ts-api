import {
	LastFMGeo,
	LastFMTag,
	LastFMUser,
	LastFMAlbum,
	LastFMChart,
	LastFMTrack,
	LastFMArtist,
	LastFMLibrary
} from '../dist';

// Your API key here
const API_KEY = '';

const geo = new LastFMGeo(API_KEY);
const tag = new LastFMTag(API_KEY);
const user = new LastFMUser(API_KEY);
const album = new LastFMAlbum(API_KEY);
const chart = new LastFMChart(API_KEY);
const track = new LastFMTrack(API_KEY);
const artist = new LastFMArtist(API_KEY);
const library = new LastFMLibrary(API_KEY);

const print = r => console.log(JSON.stringify(r, null, 2));

geo.getTopArtists({ country: 'Bulgaria', limit: 2 }).then(print);
geo.getTopTracks({ country: 'Bulgaria', limit: 2 }).then(print);

tag.getInfo({ tag: 'techno', limit: 2 }).then(print);
tag.getSimilar({ tag: 'techno', limit: 2 }).then(print);
tag.getTopAlbums({ tag: 'techno', limit: 2 }).then(print);
tag.getTopArtists({ tag: 'techno', limit: 2 }).then(print);
tag.getTopTags().then(print);
tag.getTopTracks({ tag: 'techno', limit: 2 }).then(print);
tag.getWeeklyChartList({ tag: 'techno' }).then(print);

user.getFriends({ user: 'scriptex', limit: 2 }).then(print);
user.getInfo({ user: 'scriptex' }).then(print);
user.getLovedTracks({ user: 'scriptex', limit: 2 }).then(print);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'album', tag: 'techno', limit: 2 }).then(print);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'artist', tag: 'techno', limit: 2 }).then(print);
user.getPersonalTags({ user: 'scriptex', taggingtype: 'track', tag: 'techno', limit: 2 }).then(print);
user.getRecentTracks({ user: 'scriptex', limit: 2 }).then(print);
user.getTopAlbums({ user: 'scriptex', limit: 2 }).then(print);
user.getTopArtists({ user: 'scriptex', limit: 2 }).then(print);
user.getTopTags({ user: 'scriptex', limit: 2 }).then(print);
user.getTopTracks({ user: 'scriptex', limit: 2 }).then(print);
user.getWeeklyAlbumChart({ user: 'scriptex', limit: 2 }).then(print);
user.getWeeklyArtistChart({ user: 'scriptex', limit: 2 }).then(print);
user.getWeeklyChartList({ user: 'scriptex' }).then(print);
user.getWeeklyTrackChart({ user: 'scriptex' }).then(print);

album.getInfo({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print);
album.getTags({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print);
album.getTopTags({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print);
album.search({ album: 'The Fat of The Land', artist: 'The Prodigy' }).then(print);

chart.getTopArtists({ limit: 2 }).then(print);
chart.getTopTags({ limit: 2 }).then(print);
chart.getTopTracks({ limit: 2 }).then(print);

track.getCorrection({ track: 'Firestarter', artist: 'The Prodigy' }).then(print);
track.getInfo({ track: 'Firestarter', artist: 'The Prodigy' }).then(print);
track.getSimilar({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print);
track.getTags({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print);
track.getTopTags({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print);
track.search({ track: 'Firestarter', artist: 'The Prodigy', limit: 2 }).then(print);

artist.getCorrection({ artist: 'The Prodigy' }).then(print);
artist.getInfo({ artist: 'The Prodigy' }).then(print);
artist.getSimilar({ artist: 'The Prodigy', limit: 2 }).then(print);
artist.getTags({ artist: 'The Prodigy' }).then(print);
artist.getTopAlbums({ artist: 'The Prodigy', limit: 2 }).then(print);
artist.getTopTags({ artist: 'The Prodigy' }).then(print);
artist.getTopTracks({ artist: 'The Prodigy', limit: 2 }).then(print);
artist.search({ artist: 'The Prodigy', limit: 2 }).then(print);

library.getArtists({ user: 'scriptex', limit: 2 }).then(print);
