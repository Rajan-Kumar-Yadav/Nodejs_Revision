// external Module
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.get("/",(req,res,next) => {
  console.log("i am coming from path /");
  res.send('<h1>Adding body parser for getting all data sumbmitted by user</h1>');
 
})
app.get("/contact-us",(req,res,next) => {
  console.log("i am coming from /contact-us");
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your e-mail"/>
    <input type="submit" />
    </form>`)
})  



  app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next) => {
  console.log("i am coming from post /contact-us", req.body);
  res.send("<h1>we will contact you shortly</h1>")
})

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
})