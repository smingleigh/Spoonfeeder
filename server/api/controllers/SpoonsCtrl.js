const firebase = require('firebase');

var config = {
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    databaseURL: process.env.fbdatabaseUrl,
    storageBucket: process.env.fbprojectId,
    messagingSenderId: process.env.fbmessagingSenderId,
  };
  firebase.initializeApp(config);

exports.update = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon of test details to', req.hostname, req.ip);
};

console.log('Set up SpoonsCtrl');