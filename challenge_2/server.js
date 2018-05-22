//express server here
var express = require('express');
var app = express();

app.post('/submission', function(req,res) {
  console.log(req.body); 
});

// app.get('/allPreviousFiles', function(req,res) {
//   res.status(200).end('Hello');
// });

app.use(express.static('client'));
//TODO: app.post
app.listen(3000, function() {
  console.log("listening to port 3000");
});