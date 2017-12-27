const express = require('express');
const twit = require('twit');
const dotenv = require('dotenv').load();

const app = express();
let twitterCredentials = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: process.env.timeout_ms
};

var T = new twit(twitterCredentials);

var options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };

T.get('statuses/home_timeline', options, (err, data) => {
    console.log("data length", data.length)
    for (let i = 0; i< data.length; i++){
        console.log(data[i].user.screen_name + ':');
        console.log(data[i].full_text);
    }
});