const app = require("express");
const tracksController = require("../controllers/tracksController");

app.use("/tracks", tracksController);
