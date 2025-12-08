const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Incomeing request at [${Date.now()}]`);
  //   console.log(req.headers);
  //   console.log(req.url);

  res.writeHead(200);
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
