const app = angular.module("Spoonful", ["ngRoute"]);

app.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/feed.html",
            controller: "FeedCtrl"
        });
});