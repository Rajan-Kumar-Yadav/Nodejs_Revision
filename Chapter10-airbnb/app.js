// core module
const path = require('path')

// External Module
const express = require('express');


const app = express();

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');

app.use(express.urlencoded());

app.use(userRouter); 
app.use("/host",hostRouter);
 
app.use((req,res,next) => {
 res.sendFile(path.join(rootDir,'views','404.html'));
})
const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is running on address http://localhost:${PORT}`)
});