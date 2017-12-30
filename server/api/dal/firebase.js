const db = require('firebase');

require('firebase/firestore');

db.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

let firebase = db.firestore();


let spoons = async function(userId) {
    return await firebase.collection(
        'user'
    ).doc(
        userId.toString()
    ).get();
};

module.exports = {
    spoons, 
    firebase  
};

console.log("Started firebase service");