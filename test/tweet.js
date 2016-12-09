var request = require('supertest');
var app = require('../app.js');

describe("Test tweet api", function () {

    it("to create tweet", function (done) {

        request(app)
            .post("/tweet")
            .send({
                "heading": "My First Tweet",
                "description": "This is my first tweet",
                "createdBy": "admin"
            })
            .expect(200)
            .end(function (err, res) {
                debugger;
                if (err) return done(err);
                return done();
            });
    });


    it("to get tweet", function (done) {
        request(app)
            .get("/tweet")
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

});
