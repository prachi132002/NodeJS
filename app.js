const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

app.get("/hello-world", function (req, res) {
  res.send("Hello World");
});

app.post("/hello-world", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server started on `, port);
});
