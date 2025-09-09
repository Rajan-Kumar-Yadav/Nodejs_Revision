const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.redirect("/host/host-home-list");
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((home) => {
    res.render("host/host-home-list", {
      registeredHomes: home,
      pageTitle: "host-home-list",
      currentPage: "host-homes",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found for editing");
      res.redirect("/host/host-home-list");
    }
    console.log(homeId, editing, "getEidtHome", home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Delete homeId", homeId);
  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while deleting", error);
    }
    res.redirect("/host/host-home-list");
  });
};
