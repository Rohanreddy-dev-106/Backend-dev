//DATE:2-08-25

//Working with JS
// Excution context
//Hoisting
//call stack
/** Scope in JS */
// Global
// Function(Local)
// Block
//Closures
"use strict";
// var a = 10;
// let b = 20;
// const c = 30;

// function print() {
//     var a = 'ten';
//     let b = 'twenty';

//     console.log('***** Inside print Function*****');
//     console.log(a, b, c);
//     console.log('***** *****');

//     function innerPrint() {
//         var a = 'inner10';
//         console.log('*Inside innerPrint Function*');
//         console.log(a, b, c);
//     }
//     innerPrint();
// }

// print();

// n=10; //not defined in excution context(Globel)
// console.log(n);
// var  x=10;
// let x=20;
// console.log(x);


// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }
//TODO:A closure is a function that has access to variables from its parent function, even after the parent function has finished executing.
let a = "Globel";
function outprint() {
    let b = "outprint";
   return function innerPrint() {
        let c = "innprint";
        return `${a}->${b}->${c}`
    }
   
}
const inner=outprint();
const ans=inner()
console.log(ans);
