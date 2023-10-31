const express = require("express");
const Router = express.Router();
const controller = require("../controller/Cvisitor.js");

Router.get("/", controller.main);

// 방명록 전체 보이기
Router.get("/visitors", controller.visitor);

// 방명록 하나 추가
Router.post("/visitor", controller.postVisitor);

// 방명록 하나 수정
Router.patch("/visitor/:id", controller.patchVisitor);

// 방명록 하나 삭제
Router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = Router;
