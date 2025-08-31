const { registeredHomes } = require('../controllers/hostController');
exports.getHomes = (req,res,next) => {
  console.log("Registration homepage",registeredHomes)
  res.render('home',{registeredHomes:registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'})
}