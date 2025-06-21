const express = require("express");
const router = express.Router();
const viewItemController = require("../controllers/viewItemController.js");
 router.get("/item",viewItemController.ViewItems);

 module.exports = router;