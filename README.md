# Universal Github Client

> A Github API Client for the browser and Node JS

## Installation and getting started

First install the package

```sh
npm i universal-github-client

# or

yarn add universal-github-client
```

Then you need to generate a new token from your [Github profile](https://github.com/settings/tokens) and make sure that this token has access to the relevant scopes that you plan to query the API for.

Then you need to configure and setup your Github Client instance:

### In Node

You need to install a fetch polyfill because Node does not include one.

```sh
npm i node-fetch

# or

yarn add node-fetch
```

```javascript
const fetch = require('node-fetch');
const { GithubClient } = require('universal-github-client');

const client = new GitHubClient({
	base: 'https://api.github.com',
	token: 'YOUR_GITHUB_TOKEN_HERE',
	fetch
});
```

### In browser

Please note that this package is supported by browsers which implement natively the Fetch API and have support for Promises.
If you are using an outdated browser, you need to install a polyfill for Fetch and Promises.

```javascript

import { GithubClient } = from 'universal-github-client';

const client = new GitHubClient({
	base: 'https://api.github.com',
	token: 'YOUR_GITHUB_TOKEN_HERE',
	fetch
});
```

## Usage

When you have installed and configured the `client`, you can make calls to the [Github API](https://developer.github.com/v3/):

You can use the paths defined in the [Github API](https://developer.github.com/v3/) documentation.

For example, if you want to [get the repositories](https://developer.github.com/v3/repos/#list-repositories-for-a-user) for a user you need to do the following:

```javascript
const repos = client.get({ path: '/users/scriptex/repo' }); // scriptex is the Github user name
```

There are five different instance methods based on the HTTP method required by a particular endpoint in the Github API.

```javascript
client.get({ path });

client.post({ path, data });

client.delete({ path });

client.put({ path, data });

client.patch({ path, data });
```

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Funiversal-github-client&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
