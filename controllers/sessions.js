//Dependencies 
const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/users.js');


//New Login Page
sessionsRouter.get('/new' , (req,res) => {
      res.render('sessions/new.ejs', {
            currentUser: req.session.currentUser
      })});

//Delete (logout route)
      sessionsRouter.delete('/' , (req,res) => {
            req.session.destroy((error) => {
                  res.redirect('/')
            })});

//Create (login route)
sessionsRouter.post('/' , (req,res) => {
      User.findOne({
            //checking for an existing user
            email: req.body.email
      }, (error, foundUser) => {
            //error if user is not found.
            if(!foundUser) {
                  res.send(`No account found with provided email. Please retry or sign up for a free account.`);
            } else {
                  console.log(req.body.email)
                  console.log(req.body.password)
                  console.log(foundUser.password)
                  //if user is found compare the password with the hashed password stored in the DB.
                  const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);
                        //if password matches
            if (passwordMatches){ 
                  //add user to the sessions
                  req.session.currentUser = foundUser; 
                  res.redirect('/dashboard');
            } else {
                  //if passwords don't match
                  res.send(`Invalid credentials. Please try again!`)
            }}})})


            // New Login
      sessionsRouter.get('/login' , (req,res) => {
            res.render('sessions/new.ejs')
      })



//Export User Router
module.exports = sessionsRouter;