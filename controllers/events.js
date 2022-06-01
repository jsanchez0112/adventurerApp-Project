//Dependencies
const express = require("express");
const eventsRouter = express.Router();
const Events = require("../models/events")



//New
eventsRouter.get('/newevent' , (req,res) => {
      res.render('events/new.ejs')
      })

eventsRouter.post('/' , (req,res) => {
     Events.create(req.body, (err, createdEvents) => {
           res.redirect('/dashboard')
     })});
//Delete
eventsRouter.delete("/:id" , (req,res) => {
      Events.findByIdAndRemove(req.params.id, () => {
            res.redirect("/dashboard")
      })})

     //Update
eventsRouter.put('/:id', (req,res) => {
      Events.findByIdAndUpdate(req.params.id, req.body, () => {
             res.redirect('/dashboard')
      })});
//Edit
 eventsRouter.get('/:id/edit', (req,res) => {
      Events.findById(req.params.id, (err, foundEvents) => {
            res.render('events/edit.ejs', {
                  Events: foundEvents,
            })
      })});

 //Show
eventsRouter.get('/:id' , (req,res) => {
      Events.findById(req.params.id, (err, foundEvents) => {
             res.render('events/show.ejs', {
                   Events: foundEvents
           })})});


            
//Export User Router
module.exports = eventsRouter;
