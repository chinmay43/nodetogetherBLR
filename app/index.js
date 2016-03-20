const express = require('express');
const app = express();
const motivations = require('motivations');

app.get('/', function(req, res) {
  res.send({one:"one",two:"two"});
});

app.get('/motivation', function(req, res) {
  res.send(motivations[parseInt(Math.random() * (motivations.length -1))]);
});

module.exports = app;
