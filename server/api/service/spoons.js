const defaultspoons = 3;


module.exports.spoonify = function (tweet, spoons) { 
    let result = evaluations.map(e => e(tweet, spoons)).filter(e => e != null);
    if (result.length) {
        return Math.max(result);
    }
    return defaultspoons;
};

let account = function (tweet, spoons) {
    return spoons.accounts[tweet.user.id];
};

let keywords = function (tweet, spoons) {
    let kwords = Object.keys(spoons.keywords).map(kword => kword.toLowerCase());
    let text = tweet.full_text.toLowerCase();
    if (kwords.find(kword => text.includes(kword)))
    {
        return kwords.map(word => { return { 'word': word, 'spoons': spoons.keywords[word] }; })
                     .sort()
                     .reverse()
                     .find(word => text.includes(word.word))
                     .spoons
    };
};

const evaluations = [
    account,
    keywords
];