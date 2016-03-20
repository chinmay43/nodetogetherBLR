const express = require('express');
const app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/', function(req, res) {
  res.send({one:"one",two:"two"});
});

app.get('/motivation', function(req, res) {
  //res.send(motivations[parseInt(Math.random() * (motivations.length -1))]);
  res.send(pickOne(motivations));
});

module.exports = app;
