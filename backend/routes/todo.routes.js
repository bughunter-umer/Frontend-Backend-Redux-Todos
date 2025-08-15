const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Add todo
router.post("/", async (req, res) => {
  const newTodo = await Todo.create({ text: req.body.text });
  res.json(newTodo);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.json({ message: "Todo deleted" });
});

module.exports = router;
