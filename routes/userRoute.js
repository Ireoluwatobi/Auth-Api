const express = require("express");
const router = express.Router();


const { forgotPassword } = require("../controllers/auth/forgotPassword");
const { login } = require("../controllers/auth/Login");
const { register } = require("../controllers/auth/Register");
const confirmUser = require("../controllers/auth/confirmUser");
const resetPassword = require("../controllers/auth/resetPassword");
const verifyUser = require("../controllers/auth/verifyUser");
const getAllUser = require("../controllers/auth/getAllUser");
const updateUser = require("../controllers/auth/updateUserInfo");
const authMiddleware = require("../middlewares/authHandler");




router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotPassword);

router.route("/confirm-user/:id").post(confirmUser)

router.route("/reset-password").post(resetPassword)

router.route("/verify-user/:id").post(verifyUser)

router.route("/get-all-user").post(authMiddleware, getAllUser)

router.route("/update-user-info").post(authMiddleware, updateUser)



module.exports = router;
