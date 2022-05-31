//Dependencies
const express = require('express');
const eventsRouter = express.Router();
const Events = require('../models/events');



eventsRouter.get('/dashboard/newEvent' , (req,res) => {
      res.render('events/new.ejs')
});

eventsRouter.post('/' , (req,res) => {
      Events.create(req.body, (err, createdEvents) => {
            res.redirect('/dashboard')
      })});

eventsRouter.put('/:id', (req,res) => {
      Events.findByIdAndUpdate(req.params.id, req.body, () => {
            res.redirect('/dashboard')
      })});


eventsRouter.get(':id/edit', (req,res) => {
      Events.findById(req.params.id, (err, foundEvents) => {
            res.render('events/edit.ejs')
      })});

eventsRouter.get('/:id' , (req,res) => {
      Events.findById(req.params.id, (err, foundEvents) => {
            res.render('dashboard.ejs', {
                  Events: foundEvents
            })})});


//Export User Router
module.exports = eventsRouter;