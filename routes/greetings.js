const express = require("express");

const greetingRouter = express.Router();

greetingRouter.get("/greetings", function (req, res) {
  res.send("Hello devs!");
});

greetingRouter.post("/greetings", function (req, res) {
  let body = req.body;
  console.log(body);
  res.send("Hello " + body.name);
});

module.exports = greetingRouter;
