//Dependencies 
const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/users');










//Export User Router
module.exports = sessionsRouter;