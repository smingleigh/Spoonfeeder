app.controller("FeedCtrl", function($scope, TwitterFactory){
    $scope.getTweets = () => {
        TwitterFactory.getTweets()
            .then( response => {
                $scope.tweets = response;
            });
    }

    $scope.getCurrentUserTwitterProfile = () => {
        TwitterFactory.getCurrentUserTwitterProfile()
            .then(response => {
                $scope.user = response;
            });
    }
    $scope.setSpoons = (spoonRate, userId) => {
        console.log("I AM CHANGING");
        console.log(spoonRate, "newspoonrating");
        console.log(userId, "userId");
    }

    $scope.getTweets();
    $scope.getCurrentUserTwitterProfile();
});