const path = require('path');
const express = require('express')
const homeRouter = express.Router();

homeRouter.get("/",(req,res,next) => {
  console.log("i am coming from path /");
  res.sendFile(path.join(__dirname,'../','views','home.html'))
 
})
module.exports = homeRouter;