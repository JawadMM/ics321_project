const mongoose = require("mongoose");

const { personSchema } = require("./person");

const donorSchema = mongoose.Schema({
  ...personSchema.obj,
  weight: {
    type: Number,
    required: true,
  },
  donationDate: {
    type: Date,
    required: true,
  },
  donationCount: {
    type: Number,
    required: true,
  },
  driveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodCollection",
  },
  medicalHistory: {
    type: String,
    required: true,
  },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
