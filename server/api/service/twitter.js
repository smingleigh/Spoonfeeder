const twitter = require('twit');
const util = require('util');
let options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };
const twit = twitter({
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
}, options);
console.log('twitter');
module.exports.twit = twit;

 asyncget = async function () {
    return await util.promisify(twit.get)('statuses_hometimeline', {tweet_mode: 'extended'}).then(tweeties => { return tweeties; });
}

module.exports.asyncget = asyncget;

console.log('Started Twitter service');