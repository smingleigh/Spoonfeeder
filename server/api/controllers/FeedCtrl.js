let server = require('../../server');

const userId = 382737246;

exports.feed = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let tweets = server.twitter.get('statuses/home_timeline', {tweet_mode: 'extended'}, (err, tweeties) => {return tweeties});
    let spoons = server.db.collection('user').doc(userId.toString()).get();
    Promise.all([tweets, spoons]).then(results => {
        let accounts = results[1].data().accounts;
        console.log('Found spoons list for', userId, '(' + Object.keys(accounts).length + ' spoons records)');
        res.send(results[0].data.map(tweet => {
            tweet.spoons = accounts[tweet.user.id.toString()] || 3;
            return tweet;
        }));
    });
};

exports.test = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon of static data to', req.hostname, req.ip);
    res.send(require('./testdata').testdata.map((obj) => {
        obj.spoons = (obj.user.id % 5) + 1;
        return obj;
    }));
};