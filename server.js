//Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Events = require('./models/events')
const MONGODB_URI = process.env.DATABASE_URI;
const PORT = process.env.PORT;



//Database Configuration
mongoose.connect(MONGODB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
});

//Middleware 
//Body parser middleware: gives access to req.body
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.use(
      session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false
      }));

//Database Connection Error / Success 
const db = mongoose.connection; 
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected' , () => console.log('mongo connected', MONGODB_URI));
db.on('disconnected' , () => console.log('mongo disconnected'));



//Controllers
const eventsController = require('./controllers/events')
const galleryController = require('./controllers/gallery')
const sessionsController = require('./controllers/sessions')
const usersController = require('./controllers/users')
app.use('/events' , eventsController);
app.use('/gallery' , galleryController);
app.use('/sessions' , sessionsController);
app.use('/users' , usersController);


//Main Page
app.get('/' , (req,res) => {
      if (req.session.currentUser) {
            res.render('dashboard.ejs' , {
                  currentUser: req.session.currentUser
            })
      } else {
            res.render('sessions/new.ejs' , {
                  currentUser: req.session.currentUser
            })}});


app.get('/dashboard' , (req,res) => {
      Events.find({}, (err, foundEvents) => {
            res.render('dashboard.ejs', {
                  Events: foundEvents
      })
})})



//Listener

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));


