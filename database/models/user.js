var mongoose = require("mongoose"),
    schema = mongoose.Schema,
    userSchema = new schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model("user", userSchema)
