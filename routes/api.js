var express = require('express');
var router = express.Router();

var funfacts = [
  {'id': 0, 'text': 'Ants stretch when they wake up in the morning.'},
  {'id': 1, 'text': 'The state of Florida is bigger than England.'},
  {'id': 2, 'text': 'Some bamboo plants can grow almost a meter in just one day.'},
  {'id': 3, 'text': 'Olympic gold medals are actually made mostly of silver.'},
  {'id': 4, 'text': 'On average, it takes 66 days to form a new habit.'},
  {'id': 5, 'text': 'You are born with 300 bones; by the time you are an adult you will have 206.'},
  {'id': 6, 'text': 'Ostriches can run faster than horses.'},
  {'id': 7, 'text': 'Mammoths still walked the earth when the Great Pyramid was being built.'},
  {'id': 8, 'text': 'It takes about 8 minutes for light from the Sun to reach Earth.'},
  {'id': 9, 'text': 'Some penguins can leap 2-3 meters out of the water.'}
];

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
  var factIndex = Math.floor(Math.random() * funfacts.length);
  var fact = funfacts[factIndex];
  res.json(fact);
});

router.get('/v1/fact/:factId', function(req, res, next) {
  var factId = req.params.factId;
  // Default fact which is returned if the appropriate fact can't be found.
  var fact = missing_fact;
  for (var i = 0; i < funfacts.length; i++) {
    if (funfacts[i].id == factId) {
      fact = funfacts[i];
      break;
    }
  }
  res.json(fact);
});

module.exports = router;
