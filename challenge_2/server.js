//express server here
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/submission', function(req,res) {
  var myData = req.body;
  var csvFormat;
  var keys;
  var deconstruct = (manager) => {
    csvFormat += (`${manager.firstName},${manager.lastName},${manager.country},${manager.city},${manager.role},${manager.sales}<br>`);
    keys = Object.keys(manager);
    keys.pop();
    if (manager.children.length !== 0) {
      for (var i = 0; i < manager.children.length; i++) {
        deconstruct(manager.children[i]);
      }
    }   
  };
  deconstruct(myData);
  keys += '<br>';
  res.send(keys+csvFormat);
});


app.use(express.static('client'));
//TODO: app.post
app.listen(3000, function() {
  console.log("listening to port 3000");
});