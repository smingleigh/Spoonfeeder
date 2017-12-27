var Twit = require('twit');
//const app = angular.module("Spoonful", ["ngRoute"]);

class Emitter extends require('events') {
    constructor() {
        super()
    }

    emit(e) {
        console.log(e + " emitted")
        super.emit(...arguments)
    }
}

var t = new Twit({
    consumer_key: 'Sv9kaq3nT17TOBZCL3YO0BRyJ',
    consumer_secret: 'UOMRUXSlJYwtCsO8oxi3Jah11jrqCtooMLuywozZM0BKGIvEQV',
    access_token: '382737246-cYmQgLnJbspsP3DkSmEBxkP9NzewH9GK7HdzjHAU',
    access_token_secret: 'ZTy14EYrxjFI5IhNVBxFtaCCMfRPJ4eRtdRTCJ44hpLnZ',
    timeout_ms: 60*1000 
});


var options = { screen_name: "Smingleigh", count: 1000, include_rts: true, exclude_replies: false, truncated: false};

let stream = t.stream('statuses/user_timeline', options);

stream.on('tweet', tweet =>{
    console.log(tweet);
});


// t.get('statuses/user_timeline', options, (err, data) => {
//     console.log("data length", data.length)
//     console.log(data);
//     for (let i = 0; i< data.length; i++){
//         console.log(data[i].text);
//     }
// });