app.factory("TwitterFactory", function($q, $http){
    const getTweets = () => {
        return $q( (resolve, reject) => {
            $http.get('http://localhost:5000/test')
                .then(tweets =>{
                    console.log(tweets.data);
                    resolve(tweets.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    return {getTweets};
});