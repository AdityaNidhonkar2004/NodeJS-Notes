import http from "http";

//Create a server
http.createServer((req, res) => {
  //Check All these in inspect /Network section
  // console.log(req);
  res.setHeader("Content-Type", "text/html");
  // res.statusCode=404;
  // res.statusMessage="BAD"

  //Short-Hand for status (code,message,header)
  res.writeHead(202, "Good", { "Content-Type": "text/html" }),
    res.write("<h1>Hello from Node JS Server</h1>");
});
//Listening at 3000 port
server.listen(3000, () => console.log(""));
