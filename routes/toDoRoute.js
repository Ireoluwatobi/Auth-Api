const express = require("express");
const createToDo = require("../controllers/createToDo");
const authMiddleware = require("../middlewares/authHandler");
const router = express.Router();


router.route("/create").post(authMiddleware, createToDo)

module.exports = router