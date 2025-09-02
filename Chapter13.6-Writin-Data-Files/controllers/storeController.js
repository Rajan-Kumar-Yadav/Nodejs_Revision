const Home = require("../models/home")

exports.getHomes = (req,res,next) => {
  const home = Home.fetchAll();
  console.log("Registration homepage",home)
  res.render('home',{registeredHomes:home, pageTitle: 'airbnb Home', currentPage: 'Home'})
}