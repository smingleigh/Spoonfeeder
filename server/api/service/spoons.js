const db = require('../dal/firebase');

const defaultspoons = 3;

let spoonify = async function (tweets, userId) {
    console.log('spoonifying!');
    if (tweets.constructor !== Array) {
        tweets = [tweets];
    };
    let spoons = await db.spoons(userId);
    return tweets.map(tweet => { 
        tweet.spoons = _spoonify(tweet, spoons); return tweet; 
    });
};

let _spoonify = function (tweet, spoons) {
    let result = evaluations.map(
        e => e(tweet, spoons)
    ).filter(
        e => e
    );

    if (result.length) {
        let res = Math.max(result);
        return res;
    } else {
        return defaultspoons;
    }
};

let account = function (tweet, spoons) {
    let accounts = [tweet.user.id].concat(tweet.entities.user_mentions.map(user => user.id));
    return Math.max(accounts.map(
        account => { return spoons.accounts[account]; }
    ));
};

let keywords = function (tweet, spoons) {
    let kwords = Object.keys(spoons.keywords).map(kword => kword.toLowerCase());
    let text = tweet.full_text.toLowerCase();
    if (kwords.find(kword => text.includes(kword)))
    {
        return kwords.map(
            kword => { return { 'word': kword, 'spoons': spoons.keywords[kword] }; }
        ).sort(
            kword => { return kword.spoons; }
        ).reverse(
        ).find(
            kword => text.includes(kword.word)
        ).spoons
    };
};

const evaluations = [
    account,
    keywords
];

module.exports = {
    spoonify
};