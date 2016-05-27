var express = require('express');
var router = express.Router();

var Fact = require('../db').Fact;

var missing_fact = {
  id: -1,
  text: 'I wasn\'t able to find a fun fact with that id.'
};

// API information routes
router.get('/', function(req, res, next) {
  res.render('api', { title: 'Fun Facts API' });
});
router.get('/v1/', function(req, res, next) {
  res.render('api-v1', { title: 'Fun Facts API v1' });
});

// 1.X Routes
router.get('/v1/fact/random', function(req, res, next) {
  Fact.random(function(err, docs) {
    res.json(cleanFact(docs));
  });
});

router.get('/v1/fact/:factId', function(req, res, next) {
  var factId = req.params.factId;
  Fact.fetch(factId, function(err, docs) {
    res.json(cleanFact(docs));
  });
});

// Helper functions
var cleanFact = function(docs) {
  var factData = docs[0];
  var fact = {
    id: factData.id,
    text: factData.text
  }
  return fact;
};

module.exports = router;
