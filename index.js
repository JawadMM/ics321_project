const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const { Person } = require("./models/person");
const Donor = require("./models/donor");
const { Recipient } = require("./models/recipient");
const { BloodCollection } = require("./models/bloodCollection");

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

//Donor Routes
app.get("/donors", async (req, res) => {
  const donors = await Person.find({});
  console.log(donors);
  res.render("donors/index", { donors });
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

app.delete("/donors/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.redirect("/donors");
});

app.post("/donors", async (req, res) => {
  // const newPerson = await new Donor(...req.body.person);
  // await newPerson.save();
  console.log(req.body.person);
  const {
    Fname,
    Lname,
    Address,
    Bdate,
    Email,
    weight,
    donationDate,
    medicalHistory,
  } = req.body.person;

  const derive = req.body.derive;

  const params = req.body.params;
  console.log(derive);
  const newDonor = await new Donor({
    // ...req.body.person,
    donationCount: 1,
    Fname: Fname,
    Lname: Lname,
    Address: Address,
    Bdate: Bdate,
    Email: Email,
    weight: weight,
    donationCount: 1,
    deriveId: await BloodCollection.find({ "location": derive }).id,
    donationDate: donationDate,
    medicalHistory: medicalHistory,
  });
  await newDonor.save();
  const donors = await Person.find({});
  res.render("donors/index", { donors });
});

app.listen(4000, () => {
  console.log("Listening on port 3000");
});
