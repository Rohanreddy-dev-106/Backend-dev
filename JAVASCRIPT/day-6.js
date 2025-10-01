//DAY:31-07-25

// 1. Arrays
// Creating arrays

// Adding elements → push(), unshift()

// Removing elements → pop(), shift()

// Searching → indexOf(), includes()

// Extract & Modify → slice(), splice()

// Merging & Copying → concat(), Spread ...

// Looping arrays → for...of

// 2. Rest and Spread Operators
// Rest parameter in functions (...args)

// Spread operator for:

// Shallow copy of arrays

// Merging multiple arrays

// 3. Strings
// Iterating characters using for...in

// charAt() to access characters

// split() to convert string → array

// replaceAll() to replace characters

// 4. Objects
// Creating objects with properties and methods

// Accessing properties → Dot obj.key & Bracket obj["key"]

// Calling object methods

// Looping through object keys → for...in

// 5. Nested Objects
// Creating objects inside objects

// Accessing nested properties → obj.inner.key

// Looping nested objects with for...in

// 6. Loops
// for...of → Iterating arrays

// for...in → Iterating object keys
const array = [1, 2, 3, 4, 5, 6];
//Adding elemnt Methods
//push-> add from end 
//unshift->add from front
array.push(10);
array.unshift(20);
console.log(array);

//Remove elemnts Methods
array.pop();//from end remove
array.shift()//from start remove
console.log(array);

//check the element is present or not
console.log(array.indexOf(2));//if element is present it returns its index or return -1
console.log(array.includes(2));// returns True or false

// slice and splice
console.log(array.slice(3, 5));//returns a array from  start to end-1
console.log(array.slice(-3));// negative takes only one argument no second

array.splice(1, 3, 10);// insett-index number of removel insertelement
console.log(array);

//concat two arrays

let arr2 = [10, 20, 30];

for (const element of arr2) {
    console.log(element);
    
}
let newarr = array.concat(arr2);
console.log(newarr);

//for of loop
let names = ["sai", "rohan", "reddy"];
let count = 1;
for (const element of names) {
    console.log(`Roll-Number-${count}:`, element);
    count++;

}

//Rest and Spread Operator(vvv imp)

//...Rest
let maybatch = ["sai", "poka", "ravi"];
let aprialbatch = ["raju"];
function MayBatch(batch, ...Name) {
    for (const element of Name) {
        batch.push(element);
    }
}
MayBatch(aprialbatch, "Naveen", "raju kumar", "erripoka");
MayBatch(maybatch, "sulli")
// console.log(aprialbatch);


//spread,Expending and creat a shellow coppy
let b = [...maybatch];

let newarr2 = [...maybatch, ...aprialbatch];
console.log(newarr2);

//strings

let UserName = "TekulapallySaiRohanReddy@is@my@Name"
let charcount = 0;
for (const char in UserName) {
    if (UserName.charAt(char) === "a") {
        charcount++;
    }
}
console.log(charcount);
let newarray = UserName.split("@");
console.log(newarray);
console.log(UserName.replaceAll("@", "$"));
// console.log(UserName.slice);


//Object in JS

const obj = {
    name: "Rohan",
    show: function () {
        return "Hello from function";
    }
};

// console.log(obj.name);
// console.log(obj.show());
//or

// console.log(obj["name"]);
// console.log(obj["show"]());

//loop in objects

for (const key in obj) {
    console.log(key);

}

//nested objects

const person = {
    address: {
        city: "Hyderabad",
        pincode: 500001
    },
    address2: {
        city: "Nzb",
        pincode: 500006
    }

};

// console.log(person.address.city);
//loop in nested objects
for (const key in person) {
    console.log(person[key].city);

}















