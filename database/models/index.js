var mongoose = require("mongoose"),
    config = require("../../config"),
    uri = config.url + config.db;
mongoose.connect(uri);

models = {
    user: require("./user"),
    tweet: require("./tweet")
}

exports.schema = models;
