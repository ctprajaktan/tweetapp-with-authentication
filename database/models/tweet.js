var mongoose = require("mongoose"),
    schema = mongoose.Schema,
    tweetSchema = new schema({
        heading: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: "String"
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        createdBy: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model("tweet", tweetSchema)
