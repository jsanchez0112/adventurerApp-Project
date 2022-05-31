//Dependencies
const bcrypt = require('bcrypt')
const express = require('express');
const userRouter = express.Router();
const User = require('../models/users.js')


//Registration Page 
userRouter.get('/new' , (req,res) => {
      res.render('users/new.ejs' , {
            currentUser: req.session.currentUser
      })});

//Create Registration Router
userRouter.post('/' , (req,res) => {
      //hash the user password and pass it to the database for safekeeping.
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      User.create(req.body, (error, createdUser) => {
            res.redirect('/')
      })});


//Export User Router
module.exports = userRouter;