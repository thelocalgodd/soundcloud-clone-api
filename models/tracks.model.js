const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: String,
  artist: {
    type: String,
    required: true,
  },
  genre: String,
  duration: {
    type: Number,
  },
  link: {
    type: String,
    unique: true,
  },
});

const Tracks = mongoose.model("Tracks", trackSchema);

module.exports = Tracks;
