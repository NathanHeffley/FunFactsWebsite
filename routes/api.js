var express = require('express');
var router = express.Router();

var funfacts = [
  'Ants stretch when they wake up in the morning.',
  'The state of Florida is bigger than England.',
  'Some bamboo plants can grow almost a meter in just one day.',
  'Olympic gold medals are actually made mostly of silver.',
  'On average, it takes 66 days to form a new habit.',
  'You are born with 300 bones; by the time you are an adult you will have 206.',
  'Ostriches can run faster than horses.',
  'Mammoths still walked the earth when the Great Pyramid was being built.',
  'It takes about 8 minutes for light from the Sun to reach Earth.',
  'Some penguins can leap 2-3 meters out of the water.'
];

// 1.0.X Routes
router.get('/v1.0/fact/random', function(req, res, next) {
  var factIndex = Math.floor(Math.random() * funfacts.length);
  var factText = funfacts[factIndex];
  var fact = {
    text: factText
  };
  res.json(fact);
});

module.exports = router;
