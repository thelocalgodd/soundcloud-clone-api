const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Connect to MongoDB
const db = require("../db.js");
db.connectDB();

// access the tracksdb database and the tracks collection
const Tracks = require("../unused/models/tracks.model.js");

app.get("/", (req, res) => {
  res.json({ message: "welcome my nigga" });
});

app.get("/tracks", async (req, res) => {
  const tracks = await Tracks.find();
  const trackCount = await Tracks.find().countDocuments();

  res.json({
    "tracks found": trackCount,
    tracks,
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
