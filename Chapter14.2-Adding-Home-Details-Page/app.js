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

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
});
