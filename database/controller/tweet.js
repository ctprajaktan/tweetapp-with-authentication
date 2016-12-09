(function (tweet) {
    var models = require("../models"),
        tweetModel = models.schema.tweet,
        responseDelegator = require("../../helpers/responseDelegator");
    tweet.getAllTweets = function (callback) {
        tweetModel.find({}, function (err, docs) {
            responseDelegator.delegate(err, docs, callback);
        });
    };

    tweet.getLimitedTweet = function (counter, callback) {

        tweetModel.find({}, {}, {
            sort: {
                createdAt: -1
            },
            skip: counter,
            limit: 10
        }, function (err, docs) {
            responseDelegator.delegate(err, docs, callback);
        });

    };

    tweet.createTweet = function (tweet, callback) {
        var newTweet = new tweetModel(tweet);
        newTweet.save(function (err, doc) {
            responseDelegator.delegate(err, doc, callback);
        });
    };

})(module.exports)
