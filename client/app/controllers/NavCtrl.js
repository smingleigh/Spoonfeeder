app.controller("NavCtrl", function($scope, TwitterFactory){

    $scope.getCurrentUserTwitterProfile = () => {
        TwitterFactory.getCurrentUserTwitterProfile()
            .then(response => {
                $scope.user = response;
            });
    }
    
    $scope.getCurrentUserTwitterProfile();
});