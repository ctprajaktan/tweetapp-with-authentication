(function (user) {
    var models = require("../models"),
        userModel = models.schema.user,
        responseDelegator = require("../../helpers/responseDelegator");
    user.getAllUsers = function (callback) {
        userModel.find({}, function (err, docs) {
            responseDelegator.delegate(err, docs, callback);
        });
    };

    user.isUserExist = function (username, callback) {
        userModel.find({
            username: username
        }, function (err, doc) {
            responseDelegator.delegate(err, doc, callback);
        });

    };

    user.createUser = function (user, callback) {
        var newUser = new userModel(user);
        newUser.save(function (err, doc) {
            responseDelegator.delegate(err, doc, callback);
        });
    };

    user.login = function (username, password, callback) {

        userModel.find({
            username: username,
            password: password
        }, function (err, doc) {
            responseDelegator.delegate(err, doc, callback);
        })
    }


})(module.exports)
