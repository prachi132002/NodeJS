const express = require("express");
const routes = require("./routes");
const greetingRouter = require("./routes/greetings");
const bodyparser = require("body-parser");

const app = express();

// application level middleware
// writing routes with app.use()
// app.use('/', function(req, res) {})
app.use(bodyparser.json({ limit: "1mb" }));


const port = 3001;

app.use("/", greetingRouter);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server started on `, port);
});
