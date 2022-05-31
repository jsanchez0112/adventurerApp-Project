//Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


//Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
});

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

//Database Connection Error / Success 
const db = mongoose.connection; 
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected' , () => console.log('mongo connected'));
db.on('disconnected' , () => console.log('mongo disconnected'));



//Controllers
const eventsController = require('./controllers/events')
const profileController = require('./controllers/profile')
const sessionsController = require('./controllers/sessions')
const usersController = require('./controllers/users')
app.use('/events' , eventsController);
app.use('/profile' , profileController);
app.use('/sessions' , sessionsController);
app.use('/users' , usersController);


//Main Page
app.get('/' , (req,res) => {
      if (req.session.currentUser) {
            res.render('dashboard.ejs' , {
                  currentUser: req.session.currentUser
            })
      } else {
            res.render('index.ejs' , {
                  currentUser: req.session.currentUser
            })}});

app.get('/dashboard' , (req,res) => {
      res.render('dashboard.ejs')
})



//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));


