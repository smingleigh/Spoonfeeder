const twitter = require('../dal/twitterdal');
const spoonservice = require('../service/spoons');
let user = '382737246'; // HARDCODED

let feed = async function() {
    return await spoonservice.spoonify(await twitter.feed(), user);
};

let userbyid = function (userId) {
    return twitter.userbyid(userId);
};

let userbyname = function (username) {
    return twitter.userbyname(username);
};

module.exports = {
    feed,
    userbyid,
    userbyname
};