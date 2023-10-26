const express = require("express");
const Router = express.Router();
const controller = require("../controller/cmain");

Router.get("/", controller.main);

Router.get("/axiosGet", controller.axiosGet);

Router.post("/axios", controller.axoisInfos);

Router.post("/axios2", controller.usersList);

module.exports = Router;
