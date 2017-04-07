var express = require('express');
var app = express();
var func = require('./functions.js');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/:date', function(req, res) {
    func.processParam(req.params.date, function(result) {
        res.send(result);
    });
})

var server = app.listen(8080, function(){
    console.log('express is listening on port 8080');
})

module.exports = app; // for testing