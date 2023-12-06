const mongoose = require("mongoose");

const { personSchema } = require("./person");

const donerSchema = mongoose.Schema({
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
    type: number,
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

const Doner = mongoose.model("Doner", donerSchema);

module.exports = Doner;
