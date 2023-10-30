const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/vendors/bootstrap",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist"))
);

app.use(
  "/vendors/jquery",
  express.static(path.join(__dirname, "./node_modules/jquery/dist"))
);

const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
