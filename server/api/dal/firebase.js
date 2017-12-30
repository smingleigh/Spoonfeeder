const db = require('firebase');

require('firebase/firestore');

db.initializeApp({
    apiKey: process.env.fbapiKey,
    authDomain: process.env.fbauthDomain,
    projectId: process.env.fbprojectId
});

let firebase = db.firestore();


let spoons = async function(userId) {
    let result = await firebase.collection(
        'user'
    ).doc(
        userId.toString()
    ).get();
    return result.data();
};

module.exports = {
    spoons, 
    firebase  
};

console.log("Started firebase service");