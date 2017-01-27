var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var index = require('./index');

var connectionString = process.env.DATABASE_URL;
var session = require('express-session');

// See express session docs for information on the options: https://github.com/expressjs/session
var pgSession = require('connect-pg-simple')(session);
app.use(session({
    store: new pgSession({
        conString : connectionString
    }),
    secret: process.env.DB_SECRET,
    resave: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000
    },
    secure : true,
    saveUninitialized: false
}));

//"configs"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



