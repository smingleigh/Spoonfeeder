const twit = require('twit');

let twitterCredentials = {
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
};

let options = { user_id: 382737246 };

let twitter = new twit(twitterCredentials, options);

exports.owner = function(req, res) { // Hardcoded to @Smingleigh
    let tweets = twitter.get('users/show', options, (err, tweeties) => {return tweeties});
    tweets.then( result => {
        res.send(result.data);
    });
}