const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: String,
  duration: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tracks = mongoose.model("Tracks", trackSchema);

module.exports = Tracks;
