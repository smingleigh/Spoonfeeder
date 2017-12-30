const firebase = require('../dal/firebase').db;
let user = '382737246';

exports.putspoon = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let model = {};
    let accountmodel = {};
    let spoons =req.body.spoons;
    let account = req.body.account;
    model.user = user;
    accountmodel[account] = spoons;
    model.accounts = accountmodel;
    console.log(model);
    firebase.collection('user').doc(user).set(
        model, 
        { merge: true });
};

exports.getspoon = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let spoons = firebase.collection('user').doc(user.toString()).get();
    spoons.then(result => res.send(result.data()));
};