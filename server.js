var express = require('express');
var app = express();
var func = require('./functions.js');

app.get('/', function(req, res) {
    res.send('Hello from c9 + express');
})

app.get('/:date', function(req, res) {
    func.processParam(req.params.date, function(result) {
        res.send(result);
    });
})

var server = app.listen(8080, function(){
    console.log('express is listening on port 8080');
})