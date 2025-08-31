
const registeredHomes = [];
exports.getAddHome = (req,res,next) => {
  res.render('addhome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})
}
exports.postAddHome = (req,res,next) => {
   console.log("request body",req.body)
   const {houseName,price,location,rating,photoUrl} = req.body;
  registeredHomes.push({houseName,price,location,rating,photoUrl});
 res.render('homeAdded', {pageTitle:'Home added Successfully', currentPage:'addHome'})
}
exports.registeredHomes = registeredHomes;
