var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3100/funfacts');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  // Connected!
});

var factSchema = mongoose.Schema({
  id: { type: Number, index: true},
  text: String
},
{ id: false });
factSchema.set('autoIndex', false);

var Fact = mongoose.model('Fact', factSchema);

var random = function(callback) {
  Fact.count({}, function(err, c) {
    var factIndex = Math.floor((Math.random() * c));
    Fact.find({id: factIndex}).exec(function(err, docs) {
      callback(err, docs);
    });
  });
}

var fetch = function(id, callback) {
  Fact.find({id: id}).exec(function(err, docs) {
    callback(err, docs);
  });
}

exports.Fact = Fact;
exports.Fact.random = random;
exports.Fact.fetch = fetch;
