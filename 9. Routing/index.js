import http from "http";

//This is Vanilla(core JS) way of creating Routing but now we use ExpressJS

http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else if (req.url == "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
  }
});

server.listen(3000, () => console.log("Sever Up !!"));
