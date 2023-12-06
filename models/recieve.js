const mongoose = require("mongoose");

const reciveSchema = mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recipient",
  },
  doner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Doner",
  },
  Blood: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Blood",
  },
});

const Recive = mongoose.Schema("Recive", reciveSchema);
module.exports = Recive;
