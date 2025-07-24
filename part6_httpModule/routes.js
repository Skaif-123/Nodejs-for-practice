const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("HomePage");
  } else if (req.url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Project page");
}
else{
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Page not found .........!!!!");
  }
});

port = 3000;
server.listen(port, () => {
  console.log("we are listening at port ", port);
});
