const express = require("express");
const { reset } = require("../controllers/reset/reset");
const { login } = require("../controllers/Login");
const { register } = require("../controllers/Register");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotPass").post(reset);

module.exports = router;
