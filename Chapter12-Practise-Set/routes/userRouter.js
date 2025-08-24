// core module
const path = require('path');

const express = require('express');

const userRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');
const { registeredHomes } = require('./hostRouter');

userRouter.get("/",(req,res,next) => {
  console.log(registeredHomes)
  res.render('home',{registeredHomes:registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'})
})
module.exports = userRouter;