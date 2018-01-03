app.factory("TwitterFactory", function($q, $http){
    const getTweets = () => {
        return $q( (resolve, reject) => {
            $http.get('http://localhost:5000/feed')
                .then(tweets =>{
                    console.log("tweets.data", tweets.data);
                    resolve(tweets.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    const getCurrentUserTwitterProfile = () => {
        return $q( (resolve, reject) => {
            $http.get('http://localhost:5000/smingleigh')
                .then(user =>{
                    resolve(user.data.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    return {getTweets, getCurrentUserTwitterProfile};
});