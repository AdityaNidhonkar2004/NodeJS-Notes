import http from "http";
import fs from "fs";

//Setting up server and rendering files using Vanilla JS

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url == "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1>404 page not found </h1>");
  }
});
