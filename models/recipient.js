const mongoose = require("mongoose");

const personSchema = require("./person");
const recipientSchema = mongoose.Schema({
  ...personSchema.obj,
  medicalHistory: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipient", recipientSchema);
