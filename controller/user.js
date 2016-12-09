(function (user) {
    user.init = function (app) {
        var userDbController = require("../database/controller").user,
            responseSender = require("../helpers/responseSender"),
            jwtConfig=require("../config").jwt,
            jwt = require('jwt-simple'),
            passport=app.get("passport");
            debugger
        app.route("/user")
            .get(function (req, res) {

                userDbController.getAllUsers(function (err, docs) {
                    responseSender.send(err, docs, res);
                })

            })
            .post(function (req, res) {

                userDbController.isUserExist(req.body.username, function (err, doc) {
                    if (err) {
                        responseSender.send(err, doc, res);
                    } else if (doc.length > 0) {
                        return responseSender.send("User already exists", doc, res, 400)

                    }
                    userDbController.createUser(req.body, function (err, doc) {
                        responseSender.send(err, doc, res);
                    });

                });
            })
        app.post("/login", function (req, res) {
            userDbController.login(req.body.username, req.body.password, function (err, doc) {
                if (!err && (!doc || doc.length == 0)) {
                    return responseSender.send("User does not exists", doc, res, 400);
                }
                return responseSender.send(err, doc, res);
            })

        });

        app.post("/authenticate",function(req,res){
          userDbController.login(req.body.username, req.body.password, function (err, doc) {
              if (!err && (!doc || doc.length == 0)) {
                  return responseSender.send("User does not exists", doc, res, 400);
              }

              //var token=jwt.encode(doc,jwtConfig.jwtSecrete);
              var expiryTime=new Date();
              expiryTime.setMinutes(expiryTime.getMinutes()+1)

              doc[0]._doc.expiryTime=expiryTime;
              var token=jwt.encode(doc,jwtConfig.jwtSecrete);

              return responseSender.send(err, token, res);
          })
        });

        app.get("/memberinfo",passport.authenticate('jwt',{session:false}),function(req,res){
          debugger
          responseSender.send(null, "loggedin", res)
        });

    }

})(module.exports)
