var request = require('supertest');
var app = require('../app.js');

describe("Test user api", function () {

    var username = 'Test' + String(Math.floor((Math.random() * 1000) + 1));

    it("to create user", function (done) {

        request(app)
            .post("/user")
            .send({
                "username": username,
                "password": "password"
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });


    it("to get user", function (done) {
        request(app)
            .get("/user")
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it("to login the user", function (done) {

        request(app)
            .post("/login")
            .send({
                "username": username,
                "password": "password"
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

});
