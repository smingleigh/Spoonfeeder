const firebase = require('../service/firebase');
const twitter = require('../service/twitter');
const spoonify = require('../service/spoons');

const userId = 382737246;

exports.feed = async function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let results = await Promise.all([twitter.asyncget('statuses/home_timeline', {tweet_mode: 'extended'}),
                                     firebase.spoons(userId)]);
    let spoons = results[1].data();
    let tweets = results[0].data;
    res.send(tweets.map(tweet => {
        tweet.spoons = spoonify.spoonify(tweet, spoons);
        return tweet;
    }));
};

exports.test = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon of static data to', req.hostname, req.ip);
    res.send(require('./testdata').testdata.map((obj) => {
        obj.spoons = (obj.user.id % 5) + 1;
        return obj;
    }));
};