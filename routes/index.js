var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://localhost:3000/api/v1/fact/random', function(error, response, body) {
    console.log("Retrieved fun fact: " + body);
    var fact = JSON.parse(body);
    res.render('index', { title: 'Fun Facts', fact: fact });
  });
});

module.exports = router;
