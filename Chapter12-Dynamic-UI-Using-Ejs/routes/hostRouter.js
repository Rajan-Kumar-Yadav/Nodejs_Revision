// core module
const path = require('path');
const express = require('express');

const hostRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home",(req,res,next) => {
  res.render('addhome',{pageTitle: 'Add Home to airbnb'})

})
const registeredHomes = [];
hostRouter.post("/add-home",(req,res,next) => {
   console.log(req.body)
   registeredHomes.push({houseName:req.body.houseName});
   
 res.render('homeAdded', {pageTitle:'Home added Successfully'})
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
