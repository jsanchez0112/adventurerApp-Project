//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = Schema({
      img: {type: String, required: true},
})

//User Model
const Gallery = mongoose.model('Gallery', userSchema);

//Export User Model
module.exports = Gallery;