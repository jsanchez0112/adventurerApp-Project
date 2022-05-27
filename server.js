//Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
});

//Database Connection Error / Success 
const db = mongoose.connection; 
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected' , () => console.log('mongo connected'));
db.on('disconnected' , () => console.log('mongo disconnected'));

//Middleware 
//Body parser middleware: gives access to req.body
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(
      session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false
      }));



//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));



//add in more code over the weekend. Adding this in to ensure the github repo is working.