const mongoose = require("mongoose");

const personSchema = require("./person");
const adminSchema = mongoose.Schema({
  ...personSchema.obj,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
});

module.exports = mongoose.model("Admin", adminSchema);
