const twitter = require('../service/twitter');

let feed = async function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    res.send(await twitter.feed());
};

module.exports = {
    feed
};