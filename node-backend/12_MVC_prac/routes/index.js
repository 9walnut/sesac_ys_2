const express = require("express");
const Router = express.Router();
const controller = require("../controller/main.js");

Router.get("/", controller.main);

// 회원가입
Router.post("/register", controller.register);

Router.post("/login", controller.login);
module.exports = Router;
