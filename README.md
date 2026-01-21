[![Github Build](https://github.com/scriptex/lastfm-ts-api/workflows/Build/badge.svg)](https://github.com/scriptex/lastfm-ts-api/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/lastfm-ts-api/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/lastfm-ts-api&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-lastfm-ts-api-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/lastfm-ts-api/badge)](https://www.codefactor.io/repository/github/scriptex/lastfm-ts-api)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/lastfm-ts-api/README.md?pixel)](https://github.com/scriptex/lastfm-ts-api/)

# Last.FM TypeScript API Client

> A API client for the Last.FM API written in TypeScript

See the [Last.FM API](https://www.last.fm/api) for information about the Last.Fm API, including details on how to register an account and get your API key, shared secret, and session key.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/lastfm-ts-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/lastfm-ts-api?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/lastfm-ts-api?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/lastfm-ts-api)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/lastfm-ts-api?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/lastfm-ts-api?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/lastfm-ts-api?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/lastfm-ts-api?style=plastic)

## Installation

```sh
npm install lastfm-ts-api

# or

yarn add lastfm-ts-api
```

## Usage

`lastfm-ts-api` exposes several classes which interact with different parts of the Last.FM API. These classes can be used to interact with the corresponding parts of the Last.FM API. First, you must instantiate these classes with arguments containing the details of your API account. `apiKey` is required, however since many endpoints of the API do not require authentication, `secret` and `sessionKey` are optional.

```js
// To interact with the Album API:
import { LastFMAlbum } from 'lastfm-ts-api';

const album = new LastFMAlbum('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Artist API:
import { LastFMArtist } from 'lastfm-ts-api';

const artist = new LastFMArtist('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Auth API:
import { LastFMAuth } from 'lastfm-ts-api';

const auth = new LastFMAuth('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Chart API:
import { LastFMChart } from 'lastfm-ts-api';

const chart = new LastFMChart('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Geo API:
import { LastFMGeo } from 'lastfm-ts-api';

const geo = new LastFMGeo('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Library API:
import { LastFMLibrary } from 'lastfm-ts-api';

const library = new LastFMLibrary('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Tag API:
import { LastFMTag } from 'lastfm-ts-api';

const tag = new LastFMTag('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the Track API:
import { LastFMTrack } from 'lastfm-ts-api';

const track = new LastFMTrack('API_KEY', 'SECRET', 'SESSION_KEY');

// To interact with the User API:
import { LastFMUser } from 'lastfm-ts-api';

const user = new LastFMUser('API_KEY', 'SECRET', 'SESSION_KEY');
```

## Making Requests

Each of the Last.FM classes contains methods which directly correspond to the Last.FM API methods.
For example, endpoint `User.getRecentTracks` is accessed as `user.getRecentTracks()` (after instantiating the class as described above).

Parameters can be passed to the API through the `params` argument as an object that will be sent directly with the request, either as a query for a GET request, or a body for a POST request. The property names will not be transformed or abstracted, and so they must match the endpoint parameters exactly. This is where the TypeScript definitions play significant role - they get picked up by the IDE automatically so you don't need to worry about including/importing them.

```js
user.getRecentTracks({
	user: 'USER'
});
```

## Support for other scrobbling platforms

It is possible to use other scrobbling platforms which implement the same API and/or are compatible with Last.FM. For example - [Libre.FM](https://libre.fm).

In order to interact with Libre.FM's API you must supply an additional parameter to the classes above. This additional parameter is an object containing two properties - `hostname` and `path`.

```json
{
	"hostname": "turtle.libre.fm",
	"path": "/2.0"
}
```

You can use it like this:

```ts
// To interact with the Track API:
import { LastFMTrack } from 'lastfm-ts-api';

const track = new LastFMTrack('API_KEY', 'SECRET', 'SESSION_KEY', {
    hostname: 'turtle.libre.fm'
	path: '/2.0'
});
```

**Note:** In order to interact with another scrobbling platform you need to supply an API key for that platform.

## Timeout

Optionally, supply the maximum number of milliseconds which a request can take to complete. This can be useful if your application needs quick responses or to fail fast.

```ts
// To interact with the Track API:
import { LastFMTrack } from 'lastfm-ts-api';

const track = new LastFMTrack('API_KEY', 'SECRET', 'SESSION_KEY', {
    timeout: 3000 // timeout request after 3 seconds, throws an exception
});
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
