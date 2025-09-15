//TODO: 13-09-25

//Start With Express Js

//Middlewares in express

//Types of Requests

//HTTP Header and status code

const express = require('express');//Express is a factory function. it is a special type of function which can acts as object by keys in it.
const fs=require('fs');

const server=express();

function firstMiddleware(req,res,next){
if (req.url==="/") {
    console.log(req.url);
    next()
}
}
function SecondMiddleware(req,res,next){
    console.log("secode middleware..");
   const data= fs.readFileSync("index.html",{encoding:"utf-8"});
    res.send(data);
    // next()
}
function GlobelMideleware(req,res,next){
    console.log("Application-Level-Midellware");
    next();

}
server.use(GlobelMideleware);
const excute=[firstMiddleware,SecondMiddleware];

server.get("/",excute,(req,res)=>{
    // res.send("This is From Res 2")
    return;
})
const PORT =8080;

server.listen(PORT,()=>console.log("Server is started...")
)





