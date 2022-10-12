const express = require("express");
const completeToDo = require("../controllers/toDo/completeToDo");
const createToDo = require("../controllers/toDo/createToDo");
const deleteToDo = require("../controllers/toDo/deleteToDo");
const getToDos = require("../controllers/toDo/getAllToDo");
const updateToDo = require("../controllers/toDo/updateToDo");
const authMiddleware = require("../middlewares/authHandler");
const router = express.Router();


router.route("/create").post(authMiddleware, createToDo)

router.route("/update/:id").post(updateToDo)

router.route("/delete/:id").post(deleteToDo)

router.route("/complete/:id").post(completeToDo)

router.route("/get-all").get(authMiddleware, getToDos)

module.exports = router