const app = require("express");
const router = app.Router();
const tracksModel = require("../models/tracks.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callbank(null, "./uploads/");
  },
  filename: function (req, file, callbank) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.status(200).json({
    message: "track controller working bii",
  });
});

router.get("/tracks", async (req, res) => {
  const tracks = await tracksModel.findOne();

  if (!tracks) {
    return res.status(404).json({
      message: "No tracks found",
    });
  }

  return res.status(200).json({
    message: "Tracks Found",
    tracks: tracks,
  });
});

router.post("/upload", async (req, res) => {
  try {
    const { title, artist, genre, duration } = req.body;
    const link = req.file.path;

    const track = new tracksModel({
      title,
      artist,
      genre,
      duration,
      link,
    });

    await track.save();
    res.status(201).send("Track Uploaded Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
