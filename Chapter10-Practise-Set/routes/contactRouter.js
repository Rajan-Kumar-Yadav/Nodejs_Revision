
const path = require('path')
const express = require('express');
const contactRouter = express.Router();
  const rootDir = require("../utils/pathUtils")


   contactRouter.get("/contact-us",(req,res,next) => {
  console.log("i am coming from /contact-us");
   res.sendFile(path.join(rootDir,'views','contactus.html'))
}) ;



 contactRouter.post("/contact-us",(req,res,next) => {
  console.log("body of the post is:",req.body);
  console.log("i am coming from post /contact-us");
  res.sendFile(path.join(rootDir,'views','contactusussucess.html'))
})
module.exports = contactRouter;