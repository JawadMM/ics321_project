const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

app.get("/donors", async (req, res) => {
  const people = await Person.find({});
  console.log(people);
  res.render("donors/index", { people });
});

app.get("/donors/new", async (req, res) => {
  res.render("donors/new");
});

app.get("/donors/:id", async (req, res) => {
  const donor = await Person.findById(req.params.id);

  res.render("donors/show", { donor });
});

app.get("/donors/:id/edit", async (req, res) => {
  const donor = await Person.findById(req.params.id);

  res.render("donors/edit", { donor });
});

app.put("/donors/:id", async (req, res) => {
  const { id } = req.params;
  const donor = await Person.findByIdAndUpdate(id, { ...req.body.person });
  res.redirect(`/donors/${donor.id}`);
});

app.post("/donors", async (req, res) => {
  const newPerson = await new Person(req.body.person);
  await newPerson.save();
  console.log(req.body.person);
  const people = await Person.find({});
  res.render("donors/index", { people });
});

app.listen(4000, () => {
  console.log("Listening on port 3000");
});
