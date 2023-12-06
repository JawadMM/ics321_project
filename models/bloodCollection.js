const mongoose = require("mongoose");

const bloodCollectionSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  availableTypes: {
    type: [String],
    required: true,
  },
  location: {
    type: [mongoose.Schema.ObjectId.ObjectId],
    required: true,
    ref: "Location",
  },
});

const BloodCollection = mongoose.model(
  "BloodCollection",
  bloodCollectionSchema
);
module.exports = { BloodCollection, bloodCollectionSchema };
