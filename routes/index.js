var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://localhost:3000/api/0-1-0/fact/random', function(error, response, body) {
    console.log("Retrieved fun fact: " + body);
    res.render('index', { title: 'Fun Facts', funfact: body });
  });
});

module.exports = router;
