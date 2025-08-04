//TODO:4-08-25

//Functions Expressions
//Arrow functions
//IIFE function(Immediately Invoked Function Expression)
//pure and impure functions
//callBack functions
//Higher order functions(MAP(),FILTER() ,REDUCE(),find() ,findIndex())
//Currying in js
//this keyword


"use strict";
//Functions Expressions
const sum2 = function (a = 1, b = 0) {
    console.log(a + b);

}
console.log(sum2(5, 5));

//Arrow functions
const sum3 = (num1, num2) => {
    return num1 * num2;
}
console.log(sum3(2, 4));

//IIFE function
(function (num1, num2) {
    console.log(Math.pow(num1, num2));

})(4, 2)

//return in IIFE
const returnfunction = (function () {
    let data = {
        UserName: "Rohan",
        age: 20
    };
    function getusername() {
        console.log(data.UserName);
    }
    function updateage(newage) {
        data.age = data.age + newage;
        console.log(data.age);
    }
    return {
        getusername,
        updateage
    }
})();
console.log(returnfunction);
returnfunction.getusername()
returnfunction.updateage(2)

//CallBack Functions (A function as a parameter)
function NameGreet(Wish) {
    console.log(`Rohan ${Wish()}`);

}
const greet = () => {
    return "Good Morning"
}
NameGreet(greet);


const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
];
//Quize Generator
function shuffle(arr) {
    return function () {
        // Create a copy 
        let result = [...arr];

        for (let i = 0; i < result.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));//formula for j in bound
            //swap
            let temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }

        return result;
    };
}

console.log(shuffle(questions)());

//Higher order functions
let ans = [];
function square_and_cube(arr) {
    for (const element of arr) {
        let squr = Math.pow(element, 2);
        let cube = Math.pow(element, 3);
        ans.push([`square of ${element} is ${squr}`, `cube of ${element} is ${cube}`]);
    }
    return ans;

}
function calculate(sq) {
    return sq([2, 4, 5, 6]);

}
console.log(calculate(square_and_cube));

//Currying in js
//FIXME:In JavaScript, currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions that each take one argument at a time.

function power(a) {
    return (b) => {
        return a ** b;
    }
}
console.log(power(2)(4));
console.log(power(2)(3));

//Map()HOF(value,index,arr)

let arr = [2, 3, 4, 5];
let ans2 = arr.map((element, index, array) => {
    return element / 2;
})
console.log(ans2);

//map on array of objects


const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 5000, category: "Accessories" }
];


const discountedProducts = products.map((product) => {
    let discountprice = product.price * 0.6;
    return {
        ...product,
        discount: discountprice,
        finalprice: product.price - discountprice
    };
});
//Adding tag to list
const Tag = discountedProducts.map((product) => {
    let tag = "";
    if (product.price >= 50000 && product.price <= 60000) {
        tag = "premium";
    }
    else if (product.price >= 20000 && product.price <= 45000) {
        tag = "Mid"
    }
    else {
        tag = "Budget"
    }
    return {
        ...product,
        Tag:tag

    };
});

console.log(Tag);

//reduce(()=>,initial value)HOF(accumulater ,value ,index,arr)
let sum=arr.reduce((ans,element)=>{
ans+=element;
return ans;
},0)
console.log(sum);

//filter()

const numbers = [-3, -1, 0, 2, 5];
let newnumb=numbers.filter((element)=>{
    if (element<0) {
        return element
    }
})
console.log(newnumb);

//find(), findindex()
let input =[10,1,5,4,2,15];
// let sorted=input.sort((a,b)=>{
//     return a-b;
// });
// console.log(sorted);
let findit=input.find((num)=>{
    if (num > 5) {
        return num
    }
})
console.log(findit);//first occurence it returns


//this keyword in js

//FIXME: this depends on how function is invoced using objects{};(pointer to object{}) Arrow functions → this is inherited from the enclosing scope.
console.log(this);

function UseName() {
    console.log(this);
    
}
UseName()

const user=()=>console.log(this);//inherited from the enclosing scope
user()
let id=1;
let data={
    username:"rohan reddy",
    age:20,
    [id]:5026,
    Wish :function () {
        console.log(this);
        
    }
}
data.Wish();//i called wish functin over data object









