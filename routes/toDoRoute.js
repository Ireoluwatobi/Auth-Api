const express = require("express");
const completeToDo = require("../controllers/toDo/completeToDo");
const createToDo = require("../controllers/toDo/createToDo");
const deleteToDo = require("../controllers/toDo/deleteToDo");
const getToDos = require("../controllers/toDo/getAllToDo");
const updateToDo = require("../controllers/toDo/updateToDo");
const authMiddleware = require("../middlewares/authHandler");
const router = express.Router();


router.route("/create").post(authMiddleware, createToDo)

router.route("/update/:id").post(authMiddleware, updateToDo)

router.route("/delete/:id").post(authMiddleware, deleteToDo)

router.route("/complete/:id").post(authMiddleware, completeToDo)

router.route("/get-all").post(authMiddleware, getToDos)

module.exports = router