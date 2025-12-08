const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `[${Date.now()}]: ${method} ${path}\n`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET": {
      switch (path) {
        case "/":
          res.writeHead(200).end("Hello from the server");
          break;

        case "/contact-us":
          res.writeHead(200).end("pavanvarma@gmail.com, 07810123456");
          break;

        case "/tweet":
          res.writeHead(200).end("Tweet1\nTweet2\nTweet3");
          break;

        default:
          res.writeHead(404).end("Page not found");
      }
      break;
    }
    case "POST": {
      switch (path) {
        case "/tweet":
          res.writeHead(201).end("Your tweet has been created");
          break;
      }
      break;
    }
    default:
      return res.writeHead(404).end("You're lost man!");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
