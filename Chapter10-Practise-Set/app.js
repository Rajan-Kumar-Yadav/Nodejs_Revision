// external Module
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');



app.use(bodyParser.urlencoded()); 
app.use(homeRouter);
app.use(contactRouter)
   
app.use((req,res,next) => {
  res.status(404).send('<h1>404 Your page is not Found</h1>')
})


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
})