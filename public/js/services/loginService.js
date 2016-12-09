app.factory("loginService",function loginService() {
	var isLoggedIn = false;
	var loggedInUser = "";
	this.setIsLoggedIn = function (val) {
		isLoggedIn = val;
	};
	this.getIsLoggedIn = function () {
		return isLoggedIn;
	};
	this.setLoggedInUser = function (user) {
		loggedInUser = user.username;
	};
	this.getLoggedInUser = function () {
		return loggedInUser;
	};

	return this;
})
