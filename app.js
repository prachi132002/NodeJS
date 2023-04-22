const http = require("http");

let server = http.createServer(function (req, res) {
  // apis here
  let method = req.method;
  let url = req.url;

//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk;
//   });

  console.log(method, url);
  if (method === "POST") {
    if (url === "/intro") {
      // db operations
      // sending email
    //   console.log(body);

      res.write("Inside Intro.");
    } else {
      res.write("Api not found!");
    }
  } else {
    res.write("Api not found!");
  }

  res.end();
});

server.listen(3001, () => {
  console.log(`Server started on port`, 3001);
});

/**
 * method
 * header
 * payload (body)
 */

let obj = {
  name: "Test",
  password: "passwrd",
};
