app.controller("navController", function ($scope, $location, $rootScope, loginService) {
    $scope.isLoggedIn = loginService.getIsLoggedIn();
    $scope.currentUser = "";
    $scope.logout = function () {
        $scope.isLoggedIn = false;
        $scope.currentUser = "";
        loginService.setIsLoggedIn(false);
        loginService.setLoggedInUser("");
        $rootScope.$emit("LoggedOut", true);
        $location.path("/login");
    };

    $rootScope.$on("LoggedIn", function (data) {
        $scope.isLoggedIn = data;
        $scope.currentUser = loginService.getLoggedInUser();
    });

})
