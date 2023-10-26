const express = require("express");
const Router = express.Router();
const controller = require("../controller/Cmain");

Router.get("/", controller.main);
Router.post("/axios", controller.axoisInfos);

module.exports = Router;
