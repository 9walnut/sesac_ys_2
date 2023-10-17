const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/get", function (req, res) {
  console.log(req.query);
});

app.post("/post", function (req, res) {
  res.render("result", {
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
  });
});

app.listen(PORT, function () {
  console.log("Server Open: ${PORT}");
});
