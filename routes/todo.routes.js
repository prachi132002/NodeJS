const express = require("express");

const todoRouter = express.Router();

//1.  Insert todo : post : /todo
//2.  Get todos : get : /todo
//3.  Get todo by id: get
// /todo/:id
// /todo?id=1
//4.  Delete todo : delete : /todo/:id
//5.  Update todo : patch : /todo/:id

let todoArray = [];

todoRouter.post("/todo", function (req, res) {
  let todoData = req.body;
  console.log(todoData);

  todoArray.push(todoData);

  res.status(200).json({
    message: "Todo added successfully.",
    todos: todoArray,
  });
});

todoRouter.get("/todo", function (req, res) {
  res.status(200).json({
    message: "Todo fetched successfully.",
    todos: todoArray,
  });
});

module.exports = todoRouter;
