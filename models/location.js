const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  bloodCollection: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "BloodCollection",
  },
});

module.exports = mongoose.model("Location", locationSchema);
