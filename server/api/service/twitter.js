const twitter = require('../dal/twitterdal');

let feed = function() {
    return twitter.feed();
}

module.exports = {
    feed
};