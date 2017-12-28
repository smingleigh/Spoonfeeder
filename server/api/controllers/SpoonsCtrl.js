const firebase = require('firebase');

var db = firebase.initializeApp({
    ServiceAccount: {
       projectId: process.env.fbprojectId,
       clientEmail: 'smingleigh@gmail.com',
       privateKey: process.env.fbapiKey
    },
   databaseURL: process.env.fbdatabaseURL
}); 

exports.update = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon of test details to', req.hostname, req.ip);
    res.send();
};

console.log('Set up SpoonsCtrl');