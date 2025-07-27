// 22-07-25
// Conditional Statement & Looping
// let month=prompt("Enter input")
// let num=parseInt(month);
// if (num==0) {
//     console.log(num, "is zero");

// }
// else if(num>=Number.NEGATIVE_INFINITY && num<0){
//     console.log(num,"is negative");

// }
// else{
//     console.log(num ,"is positive");

// }
let s = "sangishettinaveen04@gmail.com"
console.log(s.toLowerCase());

let lenOfs = s.length;
let le = lenOfs - 1;
let dotindex = s.lastIndexOf(".");
let atindex = s.lastIndexOf("@");
if (lenOfs < 11 || le - dotindex < 2 || le - dotindex > 3 || dotindex - atindex < 3) {
    console.log("INVALID EMAIL");

}
else {
    console.log(`${s} VALID EMAIL`);
}
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
let num1 = 10;
let num2 = 20;
let ans = (num1 > num2) ? num1 : num2;
console.log(ans);
let flag;
let ans1 = flag ? 100 : 200;
console.log(flag);
// loops
// let num=9;
// let count=0;
// for(let i=1;i<=num;i++){
//   if (num%i==0) {
//     count++;
//   }
// }
// if (count==2) {
//     console.log("prime");

// }
// else{
//     console.log("no prime");

// }
function composit(n) {
    let count=0;
    for (let i = 1; i <= n; i++) {
        if (n % i ==0) {
            count++;
        }
    }
    if (count>2) {
        return true;
    }
    else{
        return false;
    }
}
function print() {
    for(let i=2 ;i<=100;i++){
        if (composit(i)) {
            console.log(i);
            
        }
    }
}
print();







