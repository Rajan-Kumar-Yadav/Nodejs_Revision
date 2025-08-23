// core module
const path = require('path');

const express = require('express');

const userRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');

userRouter.get("/",(req,res,next) => {
  
  res.sendFile(path.join(rootDir,'views','home.html'));
})
module.exports = userRouter;