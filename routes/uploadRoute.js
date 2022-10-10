const express = require("express");
const router = express.Router();

const uploadFile = require("../controllers/upload");

const upload = require("../utils/multer")


router.post("/upload", upload.single("image"),uploadFile)

module.exports = router