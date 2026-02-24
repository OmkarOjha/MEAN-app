const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL || "mongodb://mongodb:27017/tutorials";

module.exports = {
  url: mongoURL
};