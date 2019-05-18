const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

// Database
mongoose.connect('mongodb://localhost/people');
require('./server/config/mongoose.js');

// Routes 
require('./server/config/routes.js')(app);

// Port
app.listen(8000, function() {
  console.log('Listening on port 8000');
});