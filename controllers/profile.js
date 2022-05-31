//Dependencies
const express = require('express');
const profileRouter = express.Router();
const Profile = require('../models/users')


profileRouter.get('/profile/:id/edit', (req,res) => {
      Profile.findById(req.params.id, (err, foundProfile) => {
            res.render('profile/edit.ejs')
            Profile: foundProfile; 
      })})


profileRouter.put('/profile/:id' , (req,res)=> {
      Profile.findByIdAndUpdate(req.params.id, req.body, () => {
            res.redirect('/profile');
      })})

profileRouter.get('/profile', (req,res) => {
            res.render('profile/profile.ejs')
      })
      



//Export User Router
module.exports = profileRouter;