//TODO:27-08-25
//Blocking and unblocking codes

//Creating an HTTP server

const http = require('http');//Object
// import http from "http";
const fs = require('fs');//Object
// import fs from "fs";
// console.log(typeof http);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });//it tells the brosur which data is comming
  //res.write("This is My Application  ")//Modfying response befor end
  // const data = fs.readFileSync("index.html").toString();//render HTML
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.end("Internal Server Error");
      return;

    }
    else {
      if (req.url.includes("/products")) {
        res.end("product Page...");
        // console.log(req.url);
        return; // stop execution after sending response
      }
      else if (req.url.includes("/users")) {
        res.end("users page..");
        return;
      }
      res.end(data);//Sends HTML String to Client
      return;
    }
  })

});
server.listen(3100, () => {
  console.log("Server is started....");
});












