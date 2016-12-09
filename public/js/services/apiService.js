app.factory("apiService", function ($http, $q) {


	this.callApi = function (apiConfig) {

		var deferred = $q.defer();
		var httprequest = {};
		httprequest.url = apiConfig.url;
		httprequest.method = apiConfig.method;
		httprequest.data = apiConfig.data;
		httprequest.headers = {};
		httprequest.headers['Content-Type'] = apiConfig.contenttype;

		$http(httprequest).success(function (res) {
			deferred.resolve(res);
		}).error(function (err) {
			deferred.reject(err);
		});

		return deferred.promise;
	};

	return this;
});
