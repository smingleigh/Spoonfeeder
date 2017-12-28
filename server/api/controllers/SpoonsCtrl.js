const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

let db = firebase.firestore();

exports.dump = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);

    res.send("DUMP IT ALL! NOW!");
}

let modelData = {
    user: 12,
    data: {
        1:5,
        2:3,
        5:1,
        777:2
    }
}

console.log('Set up SpoonsCtrl');