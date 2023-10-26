const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Router = require("./routes");
app.use("/", Router);

app.get("*", (req, res) => {
  res.send("페이지를 찾을 수 없습니다");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
