var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/*', function (req, res){
  res.sendFile(__dirname+'/client/index.html');
});

var port = 3000;
app.listen(port);

console.log('listening at localhost:' + port)