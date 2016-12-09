app.controller("loginController", function ($scope, apiService, configService, $location, $rootScope, loginService) {

    $scope.loginModel = {
        username: "",
        password: ""
    }
    $scope.errorMessage = "";
    $scope.isLoggedIn = loginService.getIsLoggedIn();

    var setUpLoginConfig = function (user) {
        loginService.setIsLoggedIn(true);
        loginService.setLoggedInUser(user);
        $rootScope.$emit("LoggedIn", true);
        $location.path("/");

    };

    $scope.login = function () {
        apiService.callApi({
            url: configService.BASEURL + configService.LOGIN,
            method: "POST",
            contenttype: 'application/json',
            data: $scope.loginModel
        }).then(function (res) {
            console.log("success");
            setUpLoginConfig(res.data[0]);
        }, function (err) {
            $scope.errorMessage = err.error
            console.log("error")
        });
    };

    $rootScope.$on("LoggedOut", function (data) {
        $scope.isLoggedIn = false;
    });

    $scope.createUser = function () {
        apiService.callApi({
            url: configService.BASEURL + configService.USER,
            method: "POST",
            contenttype: 'application/json',
            data: $scope.loginModel
        }).then(function (res) {
            console.log("success");
            setUpLoginConfig(res.data);
        }, function (err) {
            $scope.errorMessage = err.error
            console.log("error");
        });
    }

});
