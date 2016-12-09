(function(passport){
  var jwtStrategy=require("passport-jwt").Strategy;
  var extractJwt=require("passport-jwt").ExtractJwt;

  var user = require("../database/models/user.js");
  var jwtConfig = require("../config.js").jwt;

  passport.createStrategy=function(passportObj){
    var options={};
    options.secretOrKey=jwtConfig.jwtSecrete;
    options.jwtFromRequest = extractJwt.fromHeader('token');

    passportObj.use(new jwtStrategy(options,function(jwt_payload,done){
      if(new Date(jwt_payload[0].expiryTime)>new Date()){
        user.findOne({_id:jwt_payload[0]._id},function(err,user){
        if(err){
          return done(err, false);
        }
        if(user){
          return done(null,user);
        }
        else{
          return done(null,false);
        }
      });
    }
    else{
      return done("Token expired. Please Login Again!")
    }
    }));

  };

})(module.exports);
