//Dependencies
const express = require('express');
const galleryRouter = express.Router();
const Gallery = require('../models/gallery')

//New
galleryRouter.get('/gallery' , (req,res) => {
      res.render('gallery/gallery.ejs')
      })
      galleryRouter.post('/' , (req,res) => {
            Gallery.create(req.body, (err, createdGallery) => {
                  res.redirect('/gallery')
            })});
//Show
galleryRouter.get('/', (req,res) => {
            Gallery.find({}, (err, foundGallery) => {
                  res.render('gallery/gallery.ejs', {
                        Gallery: foundGallery,
                  })
            })});



//Export User Router
module.exports = galleryRouter;