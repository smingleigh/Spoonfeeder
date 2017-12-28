const twit = require('twit');

let twitterCredentials = {
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
};
let options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };

let twitter = new twit(twitterCredentials, options);

exports.feed = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let tweets = twitter.get('statuses/home_timeline', options, (err, tweeties) => {return tweeties});
    tweets.then( result => {
        res.send(result.data);
    });
};

exports.test = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon of static data to', req.hostname, req.ip);
    res.send(require('./testdata').testdata.map((obj) => {
        obj.spoons = 3;
        return obj;
    }));
};

console.log('Set up FeedCtrl');