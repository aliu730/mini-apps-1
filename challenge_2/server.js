//express server here
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/submission', function(req,res) {
  var myData = req.body;
  var csvFormat = "";
  var keys = Object.keys(req.body);
  keys.pop();
  keys += "<br>";
  var deconstruct = (manager) => {
    csvFormat += (`${manager.firstName},${manager.lastName},${manager.county},${manager.city},${manager.role},${manager.sales}<br>`);
    if (manager.children.length !== 0) {
      for (var i = 0; i < manager.children.length; i++) {
        deconstruct(manager.children[i]);
      }
    }   
  };
  deconstruct(myData);
  console.log(csvFormat);
  res.send(keys + csvFormat);
});

// app.get('/allPreviousFiles', function(req,res) {
//   res.status(200).end('Hello');
// });

app.use(express.static('client'));
//TODO: app.post
app.listen(3000, function() {
  console.log("listening to port 3000");
});