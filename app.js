var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello bob');
});

app.listen(process.env.PORT || 5000);
console.log("awesome change")
module.exports = app;
