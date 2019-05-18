const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: String
}, {timestamps: true});
mongoose.model('Person', PersonSchema);