const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Bdate: {
    type: Date,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = { Person, personSchema };
