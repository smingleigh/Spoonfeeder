const twitter = require('twit');

const SIMULATE_TWITTER_API = false;

let options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, tweet_mode: 'extended', isStreaming: true };

const twit = twitter({
    consumer_key: process.env.twconsumer_key,
    consumer_secret: process.env.twconsumer_secret,
    access_token: process.env.twaccess_token,
    access_token_secret: process.env.twaccess_token_secret,
    timeout_ms: process.env.twtimeout_ms
}, options);

let get = async function (endpoint, options) {
    return await twit.get(endpoint, options, (err, data) => {
        if (err) {
            console.log('-------------------');
            console.log('TWITTER API PROBLEM');
            console.log('-------------------');
            console.log(err); 
        };
        return data; 
    });
};

let feed = async function (endpoint, options) {
    if (SIMULATE_TWITTER_API)
    {
        let testdata = require('./testdata');
        console.log('----------------------');
        console.log('SIMULATING TWITTER API');
        console.log('----------------------');
        return testdata.testdata;
    };
    return (await get('statuses/home_timeline', { tweet_mode: 'extended' })).data;
}

let userbyid = async function (userId) {
    return await get('users/show', { user_id: userId })
};

let userbyname = async function (username) {
    return await get('users/show', { screen_name: username });
};

module.exports = {
    feed,
    twit,
    userbyid,
    userbyname
};

console.log('Started Twitter data service');