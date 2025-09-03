//TODO: 31-08-25


//More inbuild Modules(NodeMailer)

//Events in Node js

//Custom Events

// const fs = require("fs");
// const readLine = require("readline");

// function Main() {

//     function CreateTodList(file, data) {
//         try {
//             const TODO = fs.writeFileSync(file, data)
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     function ReadTodoList(file) {
//         return fs.readFileSync(file, { encoding: "utf-8" });
//     }

//     function AppendTodoList(file, data) {
//         fs.appendFileSync(file, data);

//     }

//     function DeleteTodoList(file) {
//         try {
//             if (fs.existsSync(file)) {
//                 fs.unlinkSync(file);
//                 console.log("TODO file deleted.");
//             } else {
//                 console.log("No file to delete.");
//             }
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     const interf = readLine.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })

//     interf.question("Enter TODO : ", (data) => {
//         const file = "todo.txt";
//         if (!fs.existsSync(file)) {
//             CreateTodList(file, data);
//             console.log("Current TODOs:\n", ReadTodoList(file));
//         }


//         AppendTodoList(file, "\nAppended: " + data);
//         console.log("After Append:\n", ReadTodoList(file));

//         if (data.includes("del")) {
//             // delete if you want (optional)
//             DeleteTodoList(file);
//         }
//         interf.close();
//     })

// }
// Main();

// const nodemailer=require("nodemailer");

// async function Sendmail() {
//     //we need to set transpoter which take the options like service ans auth object (SMTP)
//     const transpoter=nodemailer.createTransport({
//         service:"gmail",
//         auth:{
//             user:"smecrohanreddy5p6@gmail.com",
//             pass:"ekhy uhxn qhne sgxr"
//         }
//     });
// //Formate mail

// const mail={
//     from:"smecrohanreddy5p6@gmail.com",
//     to:"kothalamanjulatha@gmail.com",
//     subject:"This is a Mail from my backend program  ignore this plzzz your Kanna!..",
//     text:"HI MOM (3)...."
// }
// try{
//     const send= await transpoter.sendMail(mail);
//     // console.log(typeof send);
    
//         console.log("Mail send Sussefully....");
// }
// catch(err){
//     console.log(err);
// }

// }

// Sendmail()
// console.log("This is Blocking code come first");

//Events in Node js

//on() is async method
// const http=require("http");
// const server=http.createServer((req,res)=>{;
//    let body="";
//     if(req.method==="POST"){
//       req.on("data",(chunk)=>{
//          body += chunk.toString();
//       })

//       req.on("end",()=>{
//       console.log(body);
//       res.end("Data is Resived");
//       });
//      return;
//     }
//     else{
//     res.end("You are Using GET Request....");
//     return;
//     }

//     });
//     const PORT=3100;
//     server.listen(PORT,()=>{
//         console.log("servrt started");

// })


// Please do not change the prewritten code

 const http=require("http");
 const fs=require("fs");

const server = http.createServer((req, res) => {
  //  Write your code here
  let body = "";

  if (req.method === "POST") {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        // Append body synchronously
        fs.appendFileSync("data.txt", body + "\n");

        // Read file synchronously
        const data = fs.readFileSync("data.txt", {encoding:"utf-8"});
        console.log("File content:", data);

        res.end("Data successfully processed");
      } catch (err) {
        console.error("Error:", err);
        res.end("Error processing data");
        return;
      }
    });

  } else {
    res.end("Only POST requests are supported");
    return;
  }
});
server.listen(3000, () => {
  console.log("server is listening at port 3000");
});


const eventU=require("./UserClass.js");

const constructEvent=new eventU();

function getdata(id){
  console.log("get data from Db",id);

}
function putdata(){
  console.log("put data from Db");

}
constructEvent.addListener("CustemEvent",getdata);//on()
constructEvent.addListener("CustemEvent",putdata);
constructEvent.CreatEvent();


