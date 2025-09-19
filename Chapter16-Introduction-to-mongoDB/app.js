// core module
const path = require("path");

// External Module
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const errorsController = require("./controllers/errors");
const mongoConnect = require("./utils/databaseUtil");
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorsController.pageNotFound);

const PORT = 3000;
mongoConnect((client) => {
  console.log(client);
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server is running on address http://localhost:${PORT}`);
  });
});
