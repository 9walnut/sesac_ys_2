const express = require("express");
const routerVendors = express.Router();
const path = require("path");
routerVendors.use(
  "/bootstrap",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist"))
);
routerVendors.use(
  "/jquery",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);
module.exports = routerVendors;
