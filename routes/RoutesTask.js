const express = require("express");
const taskController = require("../controllers/TaskController");
const taskModel = require("../models/Task")

const router = express.Router();

//Rutas

router.post("/save", taskController.save);

router.get("/tasks", taskController.getTasks );

router.delete("/delete/:id", taskController.delete);

router.put("/update/:id", taskController.update);



module.exports = router;