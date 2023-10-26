const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);

  const id = "guho";
  const pw = "guho";

  if (req.body.id == id && req.body.pw == pw) {
    res.send("success");
  } else res.send("failed");
  res.send(data);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
