(function (tweet) {

    tweet.init = function (app) {
        var tweetDbController = require("../database/controller").tweet,
            multer = require("multer"),
            responseSender = require("../helpers/responseSender");

        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './public/uploads/')
            },
            filename: function (req, file, cb) {
                cb(null, req.body.createdBy + "_" + req.body.heading + "_" + new Date().getTime() + ".jpg")
            }
        });

        var upload = multer({
            storage: storage
        });

        app.get("/tweet", function (req, res) {

            tweetDbController.getAllTweets(function (err, docs) {
                responseSender.send(err, docs, res);
            })

        });
        app.post("/tweet", upload.any(), function (req, res) {
            body = req.body;
            if (req.files && req.files.length != 0) {
                body.image = req.files[0].filename;
            }
            tweetDbController.createTweet(body, function (err, doc) {
                responseSender.send(err, doc, res);
            });
        });

        app.get("/tweet/:counter", function (req, res) {
            tweetDbController.getLimitedTweet(req.params.counter, function (err, docs) {
                responseSender.send(err, docs, res);

            });
        });

    }

})(module.exports)
