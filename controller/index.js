(function (controller) {
    controller.init = function (app) {
        var modules = ["./tweet", "./user"]
        modules.forEach(function (obj) {
            require(obj).init(app);
        });
    }

})(module.exports)
