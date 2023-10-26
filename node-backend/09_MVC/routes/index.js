const express = require("express");
const Router = express.Router();
const controller = require("../controller/Cmain");

// localhost:8000/comment 로 미들웨어가 설정되어 있는 것으로 이해
Router.get("/", controller.main);
Router.get("/comments", controller.comments);

module.exports = Router;
