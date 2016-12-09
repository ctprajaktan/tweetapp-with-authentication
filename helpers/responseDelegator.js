(function (responseDelegator) {
    responseDelegator.delegate = function (err, data, callback) {

        if (err) {
            return callback(err)
        };
        return callback(null, data)

    };
})(module.exports)
