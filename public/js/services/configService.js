app.factory("configService", function ($http, $q) {
    this.BASEURL = "http://localhost:3000";

    this.TWEET = "/tweet";
    this.USER = "/user";
    this.LOGIN = "/login";

    return this;
});
