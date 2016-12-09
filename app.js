var express = require("express"),
    bodyparser = require("body-parser"),
    app = express(),
    controller = require("./controller"),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    cors = require('cors'),
    passport = require('passport'),
    passportStrategy=require('./helpers/passport');

module.exports = app;

app.use(bodyparser.json());
app.use(cors());

app.use(passport.initialize());
passportStrategy.createStrategy(passport);
app.set("passport",passport);

controller.init(app);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


http.listen(3000, function () {
    console.log("listening at port 3000")
});

io.on("connection", function (socket) {
  debugger;
    console.log("connected")
    socket.on("onTweetCreation", function (msg) {
      debugger;
        io.sockets.emit("onTweetCreation", msg);
    });
});
