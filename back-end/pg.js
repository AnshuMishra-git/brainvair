const mongoose = require("mongoose");

const pg = mongoose.Schema({
  num: Array,
  num1: Array,
  num2: Array,
});

module.exports = mongoose.model("pc", pg);
