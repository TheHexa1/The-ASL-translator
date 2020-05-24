const express = require("express");
// const bodyParser = require("body-parser");
// const session = require('express-session');
const handposeData = require("./data/handpose");

const app = express();

const static = express.static(__dirname + "/public");
const exphbs = require("express-handlebars");

app.use("/public", static);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Navigate to localhost:3000
app.listen(3000, function () {
  console.log(
    "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
  );
});

app.get("/", (req, res, next) => {
    res.render("layouts/video", { title: "ASL translator demo" });
});

app.use("*", (req, res) => {
  res.redirect("/");
});
