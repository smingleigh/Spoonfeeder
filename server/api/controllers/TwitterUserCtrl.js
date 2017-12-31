const twitter = require('../service/twitter');
let userId = 382737246; // HARDCODED

exports.owner = async function(req, res) { // Hardcoded to @Smingleigh
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    res.send(twitter.userbyid(userId));
}

exports.eliza = async function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    res.send(await twitter.userbyname('@elizawmeeks'));
}

exports.smingleigh = async function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    res.send(await twitter.userbyname('@smingleigh'));
}

