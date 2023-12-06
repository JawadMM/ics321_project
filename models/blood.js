const mongoose = require("mongoose");

const bloodSchema = mongoose.Schema({
  expirationDate: {
    type: Date,
    required: true,
  },
  blodType: {
    type: String,
    required: true,
    enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  driveID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodCollection",
  },
});

module.exports = mongoose.model("Blood", bloodSchema);
