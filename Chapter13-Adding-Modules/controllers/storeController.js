const Home = require("../modules/home")

exports.getHomes = (req,res,next) => {
  const homes = Home.fetchAll();
console.log("Registration homepage",homes)
  res.render('home',{registeredHomes:homes, pageTitle: 'airbnb Home', currentPage: 'Home'})
  }
  
