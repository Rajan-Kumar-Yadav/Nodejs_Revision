const Home = require('../models/home')

exports.getAddHome = (req,res,next) => {
  res.render('addhome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})
}
exports.postAddHome = (req,res,next) => {
   console.log("request body",req.body)
   const {houseName,price,location,rating,photoUrl} = req.body;
  const home = new Home(houseName,price,location,rating,photoUrl)
  home.save();
 res.render('homeAdded', {pageTitle:'Home added Successfully', currentPage:'addHome'})
}

