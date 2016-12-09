var app = angular.module("TweetApp", ['ngRoute', 'btford.socket-io', 'ngFileUpload'])

app.config(function ($routeProvider,$httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
    $routeProvider.when("/login", {
            templateUrl: "template/login.html",
            controller: "loginController"
        })
        .when("/", {
            templateUrl: "template/tweets.html",
            controller: "tweetController"
        })
});
