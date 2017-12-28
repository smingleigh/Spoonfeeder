const app = angular.module("Spoonful", ["ngRoute"]);

app.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/feed.html",
            controller: "FeedCtrl"
        });
});

app.filter('spoonFilter', () => {
    return (items, spoons) => {
        return items.filter(item => {
            if (item.spoons <= spoons)
                return item;
        });
    }
});