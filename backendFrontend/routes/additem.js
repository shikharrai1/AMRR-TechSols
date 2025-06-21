const express = require("express");
const router = express.Router();
const addItemController  = require("../controllers/addItemController.js");



router.get("/ItemForm",addItemController.UploadForm);
router.post("/FormData",addItemController.SubmitForm)

module.exports = router;