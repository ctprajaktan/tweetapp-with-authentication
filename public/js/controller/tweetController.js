app.controller("tweetController", function ($scope, apiService, Upload, configService, socketService, loginService) {

    $scope.tweets = [];
    $scope.tweet = {
        createdBy: "",
        description: "",
        heading: "",
        image: "",
        imagefile: ""
    }
    $scope.errorMessage = "";
    var tweetCount = 0;
    var getTweets = function () {
        apiService.callApi({
            url: configService.BASEURL + configService.TWEET,
            method: "GET",
            contenttype: "application/json"
        }).then(function (response) {
            tweetCount = response.data.length;
            $scope.tweets = response.data;
        }, function (err) {
            $scope.errorMessage = err.error;
        });
    }

    getTweets();

    socketService.on("onTweetCreation", function (msg) {
        getTweets();
    });


    $scope.isLoggedIn = function () {
        return loginService.getIsLoggedIn();
    }
    $scope.getLoggedInUser = function () {
        return loginService.getLoggedInUser();
    }

    $scope.createTweet = function () {
        $scope.tweet.createdBy = loginService.getLoggedInUser() || "admin";

        Upload.upload({
            url: configService.TWEET,
            file: $scope.tweet.imagefile,
            data: $scope.tweet,
            progress: function (e) {}
        }).then(function (data, status, headers, config) {
            // file is uploaded successfully
            socketService.emit("onTweetCreation", "tweet created")
            console.log(data);
        });
    };

});
