module.exports = function(app) {
    var feed = require('../controllers/FeedCtrl');
    var spoons = require('../controllers/SpoonsCtrl');

    // Routes
    app.route('/feed')
        .get(feed.feed);

    app.route('/test')
        .get(feed.test);

    app.route('/spoons')
        .get(spoons.update);

    app.use(function(req, res) {
        console.log('Serving up a spoonful of 404 disappointment for', req.hostname, req.ip);
        res.status(404).send('<h1>Do not try to reach ' + req.url + ', for that is impossible. Instead, try to realize the truth... there is no spoon.</h1>');
    });
};