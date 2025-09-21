const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );
  home.save().then(() => {
    console.log("HOme saved successfully");
  });
  res.redirect("/host/host-home-list");
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "host-home-list",
      currentPage: "host-homes",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then(([homes]) => {
    console.log("homes getEditHome", homes);
    const home = homes[0];
    console.log("homedescription", home.description);
    console.log("home afte home 0", home);
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
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  console.log(
    "Request body",
    id,
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
    id
  );
  console.log("home after editing going for saveing", home);
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId)
    .then(() => {
      console.log("home deleted homeId", homeId);
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting", error);
    });
};
