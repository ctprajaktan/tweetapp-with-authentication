app.factory("authenticationService",function($window){
  this.saveToken=function(token){
    $window.localStorage['token']=token;
  };
  this.getToken=function(){
    return $window.localStorage['token'];
  };
  this.logout=function(){
    $window.localStorage.removeItem('token');
  };
  this.isUserAuthenticated = function(){
		var token =this.getToken();
    var payload;
      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return new Date(payload.expiryTime) > new Date();
      } else {
        return false;
      }
	};
  return this;
});
