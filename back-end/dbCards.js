const mongoose = require("mongoose");
// import mongoose from "mongoose";

const brainVair = mongoose.Schema({
  num: Number,
});

// export default mongoose.model("cards", brainVair);
module.exports = mongoose.model("interview", brainVair);
