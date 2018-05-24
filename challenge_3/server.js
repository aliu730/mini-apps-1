//Express server goes here
//body parser.
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.post('/post', function(req, res) {
  console.log(req.body);
  res.end();
});

app.use(express.static('public'));

app.listen(3000); 