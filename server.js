require("./javascript/array");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const greetingRoutes = require("./routes/greetings");
const todoRouter = require("./routes/todo.routes");
// app.
app.use(bodyparser.json());

// app.post("/greeting", function (req, res) {
//   // query string
//   let query = req.query;
//   // console.log(query);

//   // params
//   // let params = req.params;
//   // console.log(params);

//   // body - json, form-data
//   // let body = req.body;
//   // console.log(body);

//   res.send(`Hello ${query.user}.`);
// });

// app.get("/greetings", function (req, res) {
//   res.send("Success!");
// });
app.use("/", todoRouter);
// app.use("/api-v2/", greetingRoutes);

app.listen(3002, function () {
  console.log("server started 3002");
});
