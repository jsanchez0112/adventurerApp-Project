//Dependencies
const express = require('express');
const bcrypt = require('bcrypt')
const userRouter = express.Router();
const User = require('../models/users')








//Export User Router
module.exports = userRouter;