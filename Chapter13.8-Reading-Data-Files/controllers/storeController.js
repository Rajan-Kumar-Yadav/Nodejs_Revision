const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((home) => {
    console.log("Registration homepage", home);
    res.render("home", {
      registeredHomes: home,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    });
  });
};
