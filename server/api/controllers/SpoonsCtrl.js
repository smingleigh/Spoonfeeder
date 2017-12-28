const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

let db = firebase.firestore();

exports.feed = function(req, res) { // Hardcoded to @Smingleigh
    db.collection('user')
      .where('user', '==', 382737246)
      .then(result => res.send(result));
}

console.log('Set up SpoonsCtrl');