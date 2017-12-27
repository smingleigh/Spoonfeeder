const express = require('express');
const twit = require('twit');
const dotenv = require('dotenv').load();

const app = express();
let twitterCredentials = {
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
};

var twitter = new twit(twitterCredentials);

var options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };
var thing = twitter.get('statuses/home_timeline', options, (err, tweeties) => {return tweeties});
app.listen(process.env.PORT || 5000);
console.log('listening! 5000');

app.get('/', (req, res) => {
    res.send(thing);
});