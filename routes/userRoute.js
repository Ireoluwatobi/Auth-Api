const express = require("express");
const router = express.Router();


const { forgotPassword } = require("../controllers/forgotPassword");
const { login } = require("../controllers/Login");
const { register } = require("../controllers/Register");
const confirmUser = require("../controllers/confirmUser");
const resetPassword = require("../controllers/resetPassword");




router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotPassword);

router.route("/confirm-user/:id").post(confirmUser)

router.route("/reset-password").post(resetPassword)

module.exports = router;
