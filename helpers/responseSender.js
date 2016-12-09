(function (responseSender) {
    var result = {
        isError: false,
        error: "",
        data: ""
    };
    responseSender.send = function (err, data, res, statusCode) {
        if (err) {
            result.isError = "true";
            result.error = err;
            return res.status(statusCode || 500).json(result);
        }

        result.data = data;
        res.status(statusCode || 200).json(result);
    };

})(module.exports);
