var express = require('express');
var router = express.Router();

var Fact = require('../db').Fact;

var missingFact = {
  id: "missingfact",
  text: "I'm sorry, I can't remember that fact:("
}

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
  if (docs != null) {
    if (docs[0] != null) {
      var factData = docs[0];
      var fact = {
        id: factData.id,
        text: factData.text
      }
      return fact;
    } else {
      return missingFact;
    }
  } else {
    return missingFact;
  }
};

module.exports = router;
