//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = Schema({
      date: {type: String, required: true},
      location: {type: String, required: true}
})

//User Model
const Event = mongoose.model('Event', userSchema);

//Export User Model
module.exports = Event;