const express = require("express");

const todoRouter = express.Router();

//1.  Insert todo : post : /todo
//2.  Get todos : get : /todo
//3.  Get todo by id: get
// /todo/:id
// /todo?id=1
//4.  Delete todo : delete : /todo/:id
//5.  Update todo : patch : /todo/:id

let todoArray = [
  {
    todo_id: 1,
    name: "Test",
    description: "Something",
  },
  {
    todo_id: 2,
    name: "Test",
    description: "Something",
  },
  {
    todo_id: 3,
    name: "Test",
    description: "Something",
  },
];

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



todoRouter.get('/todo/getbyquery', function(req, res) {
  
}) 

todoRouter.get("/todo/:id", function (req, res) {
  let findId = req.params.id;

  let response = {};

  for (let i = 0; i < todoArray.length; i++) {
    if (todoArray[i].todo_id == findId) {
      response = todoArray[i];
    }
  }

  res.status(200).json({
    message: "Success.",
    data: response,
  });
});


module.exports = todoRouter;
