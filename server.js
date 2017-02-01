var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});