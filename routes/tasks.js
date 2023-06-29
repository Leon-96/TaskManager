const express = require("express");

const {
  getAllTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

// import controllers

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
