console.log('Initializing...');
const dotenv = require('dotenv').load();
const express = require('express');
const firebase = require('firebase');
require('firebase/firestore');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const twit = require('twit');
const routes = require('./api/routes/routes');
app.use(express.json());                                     // parse application/json
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());
routes(app); 

app.use(express.static(path.join(__dirname, '../client')));

console.log('Starting Spoonful server...');

firebase.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

let twitterCredentials = {
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
};
let options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };

exports.db = firebase.firestore();
exports.twitter = twit(twitterCredentials, options);
exports.bodyParser = bodyParser;

console.log('Serving client from', path.join(__dirname, '../client'));
app.listen(process.env.PORT || 5000);
console.log('Spoonful started on http://localhost:' + process.env.PORT, 'at', new Date());