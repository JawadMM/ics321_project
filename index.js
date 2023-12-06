const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const { Person } = require("./models/person");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/people", async (req, res) => {
  const people = await Person.find({});
  console.log(people);
  res.render("people/index", { people });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
