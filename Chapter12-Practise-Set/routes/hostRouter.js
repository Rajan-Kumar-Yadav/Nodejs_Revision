// core module
const path = require('path');
const express = require('express');

const hostRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home",(req,res,next) => {
  res.render('addhome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})

})
const registeredHomes = [];
hostRouter.post("/add-home",(req,res,next) => {
   console.log(req.body)
   registeredHomes.push({houseName:req.body.houseName, price:req.body.price, location:req.body.location,rating:req.body.rating,photoUrl:req.body.photoUrl});
   console.log(registeredHomes)
 res.render('homeAdded', {pageTitle:'Home added Successfully', currentPage:'addHome'})
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
