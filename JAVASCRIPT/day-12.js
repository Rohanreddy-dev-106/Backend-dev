//TODO: 14-08-25
// intorduction to APIs

//DOM in js

// Events in DOM

//Event propagation

let quary=document.querySelector("h1");
let All=document.querySelectorAll("h1")
let but=document.querySelector("#bt")
All.forEach((value)=>{
    value.style.color="yellow";
})
quary.setAttribute("style", "background: yellow; color: black;");
console.log(quary.className);

console.log(quary)
console.log(All);

// let count=0;
// let event=setInterval(function(){
// document.body.classList.toggle("w-mode")
// count++;
// console.log(count);
// if (count==6) {
//     clearInterval(event)
// }

// },1000)
const b=document.createElement("button")
b.textContent="dynamic-button"
b.className="b2"
let a=document.createElement("div");
let b1=document.createElement("div");
let c=document.createElement("div");
a.textContent="A"
b1.textContent="B"
c.textContent="C"
document.body.append(a,b1,c);
c.remove()
// let clickbody=function(){
//     document.body.textContent=`this is body content${document.body.innerHTML}`
//     document.body.style.textAlign="center"
//     document.body.style.backgroundColor="black"
//     document.body.style.color="green"
// }

but.addEventListener("click",function(e){
document.body.classList.toggle("w-mode")
console.log(e.target);

})



