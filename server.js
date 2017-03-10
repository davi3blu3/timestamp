var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello from c9 + express');
})

var server = app.listen(8080, function(){
    console.log('express is listening on port 8080');
})