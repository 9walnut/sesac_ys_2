const express = require("express");
const Router = express.Router();
const controller = require("../controller/main.js");

Router.get("/", controller.index);

// 회원가입
Router.get("/signup", controller.signup);
Router.post("/signup", controller.post_signup);

// 로그인
Router.get("/login", controller.login);
Router.post("/login", controller.post_login);

// 프로필
Router.post("/profile", controller.post_profile);
Router.patch("/profile/edit/:id", controller.profile_edit);
Router.delete("/profile/delete/:id", controller.profile_delete);

module.exports = Router;
