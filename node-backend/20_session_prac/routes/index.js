const express = require("express");
const router = express.Router();

router.get("/", controller.home);

module.exports = router;
