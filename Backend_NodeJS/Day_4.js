//TODO: 13-09-25
/*express (function)
│
├─ .static()    // method attached to function
├─ .json()
├─ .urlencoded()
│
└─ () → returns app object
        │
        ├─ .get()
        ├─ .post()
        ├─ .use()
        └─ etc.*/

//Start With Express Js

//Middlewares in express

//Types of Requests

//HTTP Header and status code

const express = require('express');//Express is a factory function. it is a special type of function which can acts as object by keys in it.
const fs=require('fs');

const server=express();// it returns a server object(type function)

function firstMiddleware(req,res,next){
if (req.url==="/") {
    console.log(req.url);
    next()
}
}
function SecondMiddleware(req,res,next){
//     console.log("secode middleware..");
//    const data= fs.readFileSync("index.html",{encoding:"utf-8"});
    console.log("seconde middleware");
    
    next()
}
function GlobelMideleware(req,res,next){
    console.log("Application-Level-Midellware");
    next();

}
server.use(GlobelMideleware);//app.use()  to excute globel middlevares

const excute=[firstMiddleware,SecondMiddleware];

server.get("/",excute,(req,res)=>{
    // res.status(200);
    res.status(200).set("Content-type","text/plane");//In Express, res.status() sets the HTTP status code and returns the same res (response) object, so you can chain more methods on it.
    res.send("This is From Res 2")
    return;
})
server.use(express.static("public"));//Static HTML files
const PORT =8080;

server.listen(PORT,()=>console.log("Server is started...")
)





