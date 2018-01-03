const spoons = require('../service/spoons');
let user = '382737246';

exports.putaccountspoon = function(req, res) {
    console.log(req.method, req.path, 'swallowing a heaping spoon from', req.hostname, req.ip);
    spoons.updateaccountspoons(req.body.accounts, req.body.spoons, user);
};

exports.putkeywordspoon = function(req, res) {
    console.log(req.method, req.path, 'swallowing a heaping spoon from', req.hostname, req.ip);
    spoons.updatekeywordspoons(req.body.accounts, req.body.spoons, user);
};

exports.getspoon = function(req, res) {
    console.log(req.method, req.path, 'serving up a heaping spoon to', req.hostname, req.ip);
    let spoons = firebase.collection('user').doc(user.toString()).get();
    spoons.then(result => res.send(result.data()));
};