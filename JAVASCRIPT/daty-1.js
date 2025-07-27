console.log("Hello world");
// Date: 17-07-25(Topic JS-1)
// Varibles(let,var,const)
//Data-Types
//Wrapper Objects
//Methods in Strings
let x=10;// number
console.log(x);

x=true;// boolean
console.log(x);

x=1.2;// number (floating point)
console.log(x);

x="ten"; // string
console.log(x);

x='R'; // character as a string of length 1
console.log(x);

let y;//Declare
y=10;//Initilize
console.log(y);

//TODO:const Varibles In JavaScript, const is a keyword used to declare a constant variable — a variable that cannot be reassigned after its initial value is set.Block-scoped (like let, not like var):
{
const a=106
// a=20; wec cant assine again
console.log(a);
}
// console.log(a);not access
//TODO:Function-scoped, not block-scoped:Can be redeclared and updated:NO BLOCK-SCOPE IF/ELSE/ELSEIF/LOPPS LOSELY SCOPED
{
var a=106
a=20;
var a=30;//redeclare possible
console.log(a);
}
console.log(a);//ignore blockscope

//Number(64 bits)
let num=100;
console.log(typeof num);

//String
let name_user="Rohan Reddy";
let last_name='Reddy';
let nick_name=`Tom${num}`;
console.log(nick_name);

console.log(typeof name_user);

//Boolean(true,false)
let flag=true;
console.log(typeof flag);

//undefine
let b;
console.log(typeof b);

//null
let nu=null;
console.log(typeof nu);


//BigInt
let numbig=10n;
console.log(typeof numbig);

//some propertye of data types
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);//Infinity

//Wrapper object(expect null and undefine we have all)
console.log(num.__proto__);
console.log(nick_name.__proto__);
console.log(flag.__proto__);

//String Methods
let str="Rohan reddy JavaScript!";
let ste2="OOOH!"
console.log(str.__proto__);
console.log(str.length);
console.log(str.charAt(6));
let conc=str.concat(ste2).toLowerCase();
console.log(conc);
console.log(str.indexOf('a',5));//from 5 index occurence of a
console.log(str.indexOf("Ja"));
console.log(str.lastIndexOf("a"));








