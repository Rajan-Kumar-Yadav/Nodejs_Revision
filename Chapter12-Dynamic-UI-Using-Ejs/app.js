// core module
const path = require('path')

// External Module
const express = require('express');


const app = express();
app.set('view engine', 'ejs');
  app.set('views','views');

const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');



 app.use(express.static(path.join(rootDir,'public')));
app.use(express.urlencoded());
app.use(userRouter); 
app.use("/host",hostRouter);
  

app.use((req,res,next) => {
res.status(404).render('404', {pageTitle: '404 page'})
})
const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
});