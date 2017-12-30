module.exports = function(app) {
    var feed = require('../controllers/FeedCtrl');
    var spoons = require('../controllers/SpoonsCtrl');
    var user = require('../controllers/TwitterUserCtrl');

    // Routes
    app.route('/feed')
        .get(feed.feed);

    app.route('/user')
        .get(user.owner);

    app.route('/eliza')
        .get(user.eliza);

    app.route('/smingleigh')
        .get(user.smingleigh);

    app.route('/spoons')
        .put(spoons.putspoon)
        .get(spoons.getspoon);

    app.use(function(req, res) {
        console.log(req.method, req.path, 'serving up an empty spoon to', req.hostname, req.ip);
        res.status(404).send('<h1>Do not try to reach ' + req.url + ', for that is impossible. Instead, try to realize the truth... there is no spoon.</h1>');
    });
};