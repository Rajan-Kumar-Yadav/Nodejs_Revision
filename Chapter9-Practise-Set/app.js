// external Module
const express = require('express');
const app = express();

// app.use((req,res,next) => {
//   console.log("request path of the first Middleware is",req.url);
//   next();
// })
// app.use((req,res,next) => {
//   console.log("resuest Methos of the second Middleware is",req.method);
//   next();
// })

// app.use((req,res,next) => {
//   console.log("response of the third Middleware is")
//   res.send('<h1>Welcome To Chpater 9 Practise Set');
// })
app.get("/",(req,res,next) => {
  console.log("i am coming from path /");
  res.send('<h1>Welcome To Chpater 9 Practise Set');
 
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

app.post("/contact-us",(req,res,next) => {
  console.log("i am coming from post /contact-us");
  res.send("<h1>we will contact you shortly</h1>")
})

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
})