const express = require("express");
const router = express.Router();


const { forgotPassword } = require("../controllers/forgotPassword");
const { login } = require("../controllers/Login");
const { register } = require("../controllers/Register");
const confirmUser = require("../controllers/confirmUser");
const resetPassword = require("../controllers/resetPassword");
const verifyUser = require("../controllers/verifyUser");
const getAllUser = require("../controllers/getAllUser");
const updateUser = require("../controllers/updateUserInfo");
const authMiddleware = require("../middlewares/authHandler");




router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotPassword);

router.route("/confirm-user/:id").post(confirmUser)

router.route("/reset-password").post(resetPassword)

router.route("/verify-user/:id").post(verifyUser)

router.route("/get-all-user").post(authMiddleware, getAllUser)

router.route("/update-user-info").post(updateUser)



module.exports = router;
