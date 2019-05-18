const mongoose = require('mongoose');
mongoose.model('Person');
const people = require('../controllers/people.js')

module.exports = function(app) {
  app.get('/', people.index);

  app.get('/new/:name', people.create);

  app.get('/remove/:name', people.remove);

  app.get('/view/:name', people.view);
}