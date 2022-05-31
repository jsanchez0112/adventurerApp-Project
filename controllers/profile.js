//Dependencies
const express = require('express');
const profileRouter = express.Router();
const Profile = require('../models/users')


profileRouter.get('/:id/edit', (req,res) => {
      Profile.findById(req.params.id, (err, foundProfile) => {
            res.render('profile/edit.ejs',{
            Profile: foundProfile,
            })})});


profileRouter.put('/:id' , (req,res)=> {
      Profile.findByIdAndUpdate(req.params.id, req.body, () => {
            res.redirect('/profile');
      })})

profileRouter.get('/', (req,res) => {
            Profile.find({}, (err, foundProfile) => {
                  console.log(foundProfile)
                  res.render('profile/profile.ejs', {
                        Profile: foundProfile,
                  })
            })});



//Export User Router
module.exports = profileRouter;