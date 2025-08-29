//TODO:9-08-25

// ES6 Modules in Node-JS

//NPM

// const http=require("http");
// const server=http.createServer((req,res)=>{
   
//     if (req.url.includes("/home")){
//         res.write("Nodemon server...");
//         res.end();
//         return;

//     }
//     res.end("not found");
//     return;
    
//     });
//     const PORT=3100;
//     server.listen(PORT,()=>{
//         console.log("servrt started");

//     })
const joke=require('give-me-a-joke');
joke.getRandomDadJoke((joke)=>{
    console.log(joke);
    
})
joke.getRandomJokeOfTheDay("animal",(joke)=>{
console.log(joke);

})

// const rf = require('random-facts');
// console.log(rf.randomFact());
// console.log(rf.factCount()); 

