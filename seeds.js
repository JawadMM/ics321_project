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

const newPerson = new Person({
  Fname: "J",
  Lname: "M",
  Address: "Dhahran",
  Bdate: new Date(1999, 1, 3),
  Email: "hey@gmail.com",
});

newPerson
  .save()
  .then(() => {
    console.log(newPerson);
  })
  .catch((err) => {
    console.log(err);
  });
