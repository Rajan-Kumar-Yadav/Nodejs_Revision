// Core Modules
const http =require('http');
// External Module
const express = require('express')

const app = express();

app.get("/",(req,res,next) => {
  console.log("Came in first middleware", req.url,req.method)
  //res.send("<p>Came from First Middleware</p>")
  next();
})
app.post("/submit-details",(req,res,next) => {
  console.log("Came in seocond middleware", req.url,req.method)
  res.send("<p>Welcome to Complete Coding Nodejs series</p>")
})
app.use("/",(req,res,next) => {
  console.log("Came in seocond middleware", req.url,req.method)
  res.send("<p>Came from another Middleware</p>")
})


 const server = http.createServer(app);

 
 const PORT = 3000
 server.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
 })