const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  index: function(req, res) {
    Person.find({}, function(err, people) {
      console.log(people);
      res.json({message: 'Success', data: people});
    });
  },

  create: function(req, res) {
    var person = new Person({name: req.params.name});
    person.save(function(err) {
      if(err) {
        console.log('Something went wrong');
      }
    });
    res.redirect('/');
  },

  remove: function (req, res) {
    Person.remove({name: req.params.name}, function(err) {
      res.redirect('/');
    });
  },

  view: function(req, res) {
    console.log(req.params.name)
    Person.findOne({name: req.params.name}, function(err, person) {
      console.log(req.params.name)
      if(err) {
        redirect('/');
        console.log('No person by that name');
      } else {
        res.json({ message: 'Success', data: person})
      }
    })
  }
}