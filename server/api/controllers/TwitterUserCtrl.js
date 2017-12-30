const server = require('../../server');
let options = { user_id: 382737246 };

exports.owner = function(req, res) { // Hardcoded to @Smingleigh
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let tweets = twitter.get('users/show', options, (err, tweeties) => {return tweeties});
    tweets.then(result => {
        res.send(result.data);
    });
}

exports.eliza = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let data = server.twitter.get('users/show', { screen_name: "@elizawmeeks" }, (err, usr) => {return usr});
    data.then(result => {
        res.send(result);
    });
}

exports.smingleigh = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let data = server.twitter.get('users/show', { screen_name: "@smingleigh" }, (err, usr) => {return usr});
    data.then(result => {
        res.send(result);
    });
}

