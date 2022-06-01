//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = Schema({
      name: {type: String, required: true},
      date: {type: String, required: true},
      location: {type: String, required: true},
      venue: {type: String, required: true},
      price: {type: String, required: true},


})

//User Model
const Event = mongoose.model('Event', userSchema);

//Export User Model
module.exports = Event;