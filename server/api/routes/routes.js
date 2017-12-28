module.exports = function(app) {
    var feed = require('../controllers/FeedCtrl');

    // Routes
    app.route('/feed')
        .get(feed.feed);

    app.route('/test')
        .get(feed.test);
};