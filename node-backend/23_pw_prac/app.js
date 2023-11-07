const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const crypto = require("crypto");
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(crypto({}));

const router = require("./routes");
app.use("/", router);

const userRouter = require("./routes");
app.use("/user", userRouter);

app.use(
  "/vendors/bootstrap",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist"))
);

app.use(
  "/vendors/jquery",
  express.static(path.join(__dirname, "./node_modules/jquery/dist"))
);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
