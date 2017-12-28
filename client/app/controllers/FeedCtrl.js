app.controller("FeedCtrl", function($scope, TwitterFactory){
    $scope.getTweets = () => {
        TwitterFactory.getTweets()
            .then( response => {
                $scope.tweets = response;
            });
    }

    $scope.getTweets();
    
});