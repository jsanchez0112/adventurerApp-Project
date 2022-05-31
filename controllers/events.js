//Dependencies
const { Router } = require('express');
const express = require('express');
const { events } = require('../models/events');
const eventsRouter = express.Router();
const Events = require('../models/events');

app.get('/dashboard' , (req,res) => {
      res.render('dashboard.ejs')
});


eventsRouter.get('/new/event' , (req,res) => {
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