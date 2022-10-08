const express = require("express");
const router = express.Router();


const { reset } = require("../controllers/reset/reset");
const { login } = require("../controllers/Login");
const { register } = require("../controllers/Register");



router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(reset);

module.exports = router;
