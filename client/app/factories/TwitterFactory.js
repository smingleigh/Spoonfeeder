app.factory("TwitterFactory", function($q, $http){
    const getTweets = () => {
        return $q( (resolve, reject) => {
            $http.get('/twitter')
                .then(tweets =>{
                    resolve(tweets.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    return {getTweets};
});