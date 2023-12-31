const express = require("express");
const Router = express.Router();
const controller = require("../controller/main.js");

Router.get("/", controller.main);

// 회원가입
Router.post("/register", controller.register);
//  로그인
Router.post("/login", controller.login);

// 수정
Router.patch("/login/:id", controller.patchLogin);

// 조회
Router.get("/login/:id", controller.getLoginById);

// 방명록 삭제
Router.delete("/login/:id", controller.deletelog);
module.exports = Router;
