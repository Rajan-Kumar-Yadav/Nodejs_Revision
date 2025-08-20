// core module
const path = require('path');
const express = require('express');

const hostRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home",(req,res,next) => {
  
res.sendFile(path.join(rootDir,'views','addhome.html'));
})
hostRouter.post("/add-home",(req,res,next) => {
   console.log(req.body)
 res.sendFile(path.join(rootDir,'views','homeAdded.html'));
})

module.exports = hostRouter;
