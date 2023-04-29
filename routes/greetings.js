const express = require("express");

const router = express.Router();

router.get("/greetings", function (req, res) {
  // console.log(`--->`, req.ip);
  // let hasCalledFiveTimes = true;

  // if(hasCalledFiveTimes) {
  //   res.status(400).json({
  //     message: 'Max api call exceeded.'
  //   })
  // }

  // if (req.baseUrl === "/api") {
  //   res.send("Hi there.");
  // } else if (req.baseUrl === "/api-v2") {
  //   res.json({
  //     message: "Hi there.",
  //   });
  // }
  // res.status(500).json({
  //   message: "Success",
  // });

  res.redirect("/success");
});

router.post("/success", function (req, res) {
  res.send("Successfully introduced.");
});

module.exports = router;
