//express server here
var express = require('express');
var app = express();

app.get('/', function(req,res) {
  res.send("testing");
});

//TODO: app.post
app.listen(3000, function() {
  console.log("listening to port 3000");
})