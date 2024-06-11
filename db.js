const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("---- Connected to MongoDB");
    })
    .catch((err) => {
      console.log("--x-- Error Connecting to MongoDB: ", err);
    });
};

module.exports = { connectDB };
