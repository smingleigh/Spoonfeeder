const twitter = require('twit');
const chalk = require('chalk');

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

let follows = async function(userid) {
    let result = await get('friends/ids', { user_id: userid });
    return result.data.ids.map(e => e.toString());
};

let feedstream = async function(userid, ondata, onerror, ondisconnect) {
    console.log(chalk.green('Beginning streaming', userid));
    let followlist = await follows(userid);
    let options = { follow: followlist };
    let stream = twit.stream('statuses/filter', options);
    stream.on('message', ondata);
    stream.on('error', onerror);
    stream.on('disconnect', msg => console.log(chalk.red(msg)));
};

// COMMENT THIS CALL OUT IF YOU DON'T WANT TO STREAM
// SMINGLEIGH'S WHOLE FEED DIRECTLY INTO YOUR CONSOLE
// FOR SOME REASON

feedstream(382737246, tweet => {
    console.log(chalk.yellow(tweet.user.screen_name, ':'), chalk.green(tweet.text));
}, error => {
    console.log(chalk.red(error));
}, disconnect => {
    console.log(chalk.orange('disconnected!'));
    console.log(chalk.orange(disconnect));
});

// End experimental testing code

module.exports = {
    feed,
    twit,
    userbyid,
    userbyname
};

console.log('Started Twitter data service');