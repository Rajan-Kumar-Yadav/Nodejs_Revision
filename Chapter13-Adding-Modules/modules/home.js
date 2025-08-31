const registeredHomes = [];
module.exports = class Home{
constructor(houseName,price,location,rating,photoUrl){
  this.houseName = houseName;
  this.price = price;
  this.location = location;
  this.rating = rating;
  this.photoUrl = photoUrl;
  console.log("constructor this",this);
  console.log("constructor houseName",this.houseName);
}
save(){
registeredHomes.push(this)
}
static fetchAll(){
  return registeredHomes;
}
}
