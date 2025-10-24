//TODO:9-08-25

// ES6 Modules in Node-JS

//NPM

//readline module

//File system Module(blocking and not blocking codes )

//Path Module

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
// const joke=require('give-me-a-joke');
// joke.getRandomDadJoke((joke)=>{
//     console.log(joke);

// })
// joke.getRandomJokeOfTheDay("animal",(joke)=>{
// console.log(joke);

// })

// const rf = require('random-facts');
// console.log(rf.randomFact());
// console.log(rf.factCount()); 

// const readline = require("readline");
//build a interface

// const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// //ask it
interface.question("Enter the First Number", (num1) => {
    interface.question("Enter the Second Number", (num2) => {
        const ans = parseInt(num1) + parseInt(num2);//closures
        console.log(ans);
        interface.close();
    })

})

//blocking code

const fs = require("fs");
// const buffer = fs.readFileSync("data.txt").toString();
// console.log(buffer);
// console.log("After print...");

//Creating and writing in file
// try {
//     fs.writeFileSync("database.txt", "This is a Employe file\n {name:rohan reddy}");
// } catch (error) {
//     console.log(error);
// }

 //appending data to a file if nothe exist  create it

// fs.appendFileSync("employe.txt", "\n{hello}\n");

 //Delete a file
// try {
//     fs.unlinkSync("database.txt");
// } catch (error) {
//     console.log(error);

// }

// unblocking codes

//Reading file
// fs.readFile("users.json",(err,data)=>{
//     if(err)console.log(err);
//     else console.log(data.toString());
// });
console.log("This is another operation");

//Creating file
// fs.writeFile("data.txt","mbvjldjb",(err)=>{
//     console.log(err);
    
// })

//append file

// fs.appendFile("data.txt","kdklbvkbvskj",(err)=>{
//     console.log(err);
    
// })

//delet file

// fs.unlink("data.txt",(err)=>{console.log(err);
// })

//path Module

const path=require("path");

const p=path.join("Backend_Nodejs","employe.txt");
const abs=path.resolve("Backend_Nodejs","employe.txt")
const ext=path.extname("employe.txt")
console.log(p);
console.log(abs);
console.log(ext);






