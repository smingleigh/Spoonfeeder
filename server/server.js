console.log('Initializing...');
const dotenv = require('dotenv').load();
const express = require('express');
const twit = require('twit');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const app = express();
const path = require('path'); 

app.use(express.static(path.join(__dirname, '../client')));

console.log('Starting Spoonful server...');
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());

console.log('Serving client from', path.join(__dirname, '../client'));

let twitterCredentials = {
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
};

let twitter = new twit(twitterCredentials);

let options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };
let thing = twitter.get('statuses/home_timeline', options, (err, tweeties) => {return tweeties});
app.listen(process.env.PORT || 5000);
console.log('Spoonful started on http://localhost:' + process.env.PORT);

app.get('/', (req, res) => {
    res.send(thing);
    console.log("Delivered 1 heaping spoon to", req.ip);
});