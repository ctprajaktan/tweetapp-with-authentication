app.factory("sessionInjector",function(authenticationService){
  this.request =function(config){
    if(authenticationService.isUserAuthenticated()){
      config.headers['token']=authenticationService.getToken();
    }
    return config;
  }
  return this;
});
