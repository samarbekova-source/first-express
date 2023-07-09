//jshint esversion:6

const express = require("express");

const app = express();

// const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req);
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: chika@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "Hey there! My name is Chika and i Just started to learn Express. If you would like to contact me go to the contact page, See you soon"
  );
});

app.get("/hobby", function (req, res) {
  res.send("<ul><li>Code</li><li>Hiking</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// npm install -g nodemon
