import express  from "express";
import path from "path";
import{productController }from "./src/controllers/products.controller.js"
const server=express();

//setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

const productcont=new productController();

server.get("/",productcont.getproduct)//just pass a refrence of function dont call it
server.get("/login", productcont.getlogin);
// server.use(express.static("src/views"))
const PORT=8080;
server.listen(PORT,()=>console.log("Server is Listening")
)