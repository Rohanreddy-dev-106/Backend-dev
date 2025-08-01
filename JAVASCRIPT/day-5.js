//29-07-25
//Functions Arrays Strings
function addTwo(numbers=0,age="no") {
    console.log(`the add number is ${numbers} ${age} yaaa..`);
    tellmaajoke();//we can hear also
}
let a=10;
let b=20;
let c=a+b;
addTwo(c,"Two");
function tellmaajoke() {
    console.log("hhhhhhhhhhhhhh");
    
}
function getName(name){
    return name.concat(" ").concat("Reddy").concat(Math.random().toFixed(2)*10);//terminate program
    // return {
    //     "Name":"rohan",
    //     "Age":19
    // }
let a=10;
console.log(a);//not detecting
Math.sqrt(a)

}
console.log(getName("Rohan"));
let lis=[10,1.23,"rohan",true,undefined,null];
console.log(lis.length);
let arr=new Array(getName("SAI"));
console.log(arr);


