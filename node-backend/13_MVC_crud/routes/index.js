const express = require("express");
const Router = express.Router();
const controller = require("../controller/main.js");

Router.get("/", controller.main);
Router.get("/signin", controller.signin);
Router.get("/update", controller.update);
Router.get("/delete", controller.delete);

// 회원가입
Router.post("/signin", controller.signin);

//  로그인
Router.post("/login", controller.login);

module.exports = Router;
