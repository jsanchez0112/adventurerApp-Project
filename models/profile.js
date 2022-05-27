//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//User Schema
const userSchema = Schema ({
      name: {type: String, require: true},
      city: {type: String, required: true},
      age: {type: Number, required: true},
      hobbies: {type: String, required: true},
      
})