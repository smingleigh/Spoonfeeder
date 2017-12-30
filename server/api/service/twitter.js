const twitter = require('../dal/twitterdal');
const spoonservice = require('../service/spoons');
let user = '382737246'; // HARDCODED

let feed = function() {
    return spoonservice.spoonify(twitter.feed(), user);
};

module.exports = {
    feed
};