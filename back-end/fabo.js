const mongoose = require("mongoose");

const fabo = mongoose.Schema({
  num: Number,
});

module.exports = mongoose.model("fabo", fabo);
