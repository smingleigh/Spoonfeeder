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

let putmodel = function(model) {
    db.collection(
        'user'
    ).doc(
        model.user.toString()
    ).set(
        model, 
        { merge: true }
    );
};

module.exports = {
    spoons,
    putmodel, 
    firebase  
};

console.log("Started firebase service");