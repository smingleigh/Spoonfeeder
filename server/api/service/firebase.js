const firebase = require('firebase');

require('firebase/firestore');

firebase.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

module.exports.firebase = firebase.firestore();

console.log("Started firebase service");

module.exports.spoons = async function(userId) {
    return await firebase.firestore()
                         .collection('user')
                         .doc(userId.toString())
                         .get();
};