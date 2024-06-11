const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const tracksController = require("./controllers/tracksController");

morgan("dev");

const app = express();
app.use(express.json());

app.set("view engine", "html");

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const db = require("./db");
db.connectDB();

app.get("/", (req, res) => {
  res.json({ message: "welcome my nigga" });
});

app.get("/upload-tracks", async (req, res) => {
  res.render("upload-tracks");
});

app.use("/api/tracks", tracksController);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
