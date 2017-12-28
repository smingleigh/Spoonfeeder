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

    $scope.getTweets();
    $scope.getCurrentUserTwitterProfile();
});