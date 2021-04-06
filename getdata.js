var Spotify = require('spotify-web-api-js');
var s = new Spotify();
var spotifyApi = new SpotifyWebApi({
    redirectUri: "/",
    clientId: processz
});
require('dotenv').config()
spotifyApi.setAccessToken('<here_your_access_token>');
const getDataFromSpotify = () => {
    var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'https://example.com/callback',
    clientId = '5fe01282e44241328a84e7c5cc169165',
    state = 'some-state-of-my-choice',
    showDialog = true,
    responseType = 'token';
}