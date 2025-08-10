//TODO:Date 7-08-25

//OOPS in js

//Object Leteral,this in objects,factory function,constructer function

//Prototype

//prototype chain

//Arrays Prototype

//call/apply/bind Methods

//object destructuring




// Object Literal Example
const student = {
  name: "Rohan",
  age: 20,
  subjects: ["Math", "Physics", "Computer Science"], // Array
  address: { // Nested Object
    street: "123 Main Street",
    city: "Hyderabad",
    pinCode: 500001
  },
  grades: [  // Array of Nested Objects
    { subject: "Math", score: 95 },
    { subject: "Physics", score: 88 },
    { subject: "Computer Science", score: 92 }
  ],
  getAverageScore: function () {  // Function inside Object
    let total = 0;
    student.grades.forEach((value) => {
      total += value.score;
    });;
    return Math.floor(total / this.grades.length);
  }
};

// Accessing data
// console.log(student.name);               // Rohan
// console.log(student.address.city);       // Hyderabad
// console.log(student.subjects[1]);        // Physics
// console.log(student.getAverageScore());  // 91.666...
// console.log(student);


//this in objects and factory function
function info(title, yesr, ...cast) {
  let movie = {
    title: title,
    year: yesr,
    cast: cast,
    getdetails: function () {
      console.log(this.title, this.year, this.cast);

    }
  }
  return movie;
}
let movie1 = info("RRR", 2023, "NTR", "Ram charan");
let movie2 = info("F1", 2025, "BP", "MEA")
// movie1.getdetails()
// movie2.getdetails()

//constructure function
function Movies(title, year) {
  this.title = title;
  this.year = year;
  // this.getdetails = function () {
  //   console.log(this.title, this.year);

  // }
}
Movies.prototype.getdetails=function () {
  console.log(this.title,this.year);
  
}
let m1 = new Movies("cooli", 2025)
let m2 = new Movies("cooli2", 2027)
console.log(m1.getdetails());
console.log(m2.getdetails());

//prototype
function data(data) {
  this.data = data
  this.get = function () {
    console.log(this.data);

  }
}
let obj = new data(106);
console.log(obj);
console.log(obj.__proto__);//A prototype is like a backup object that JavaScript uses to find properties or methods if it doesn’t find them on the main object.

console.log(Object.getPrototypeOf(obj));
//call(this->pointer),apply(),bind()

let car = {
  bus: "RS/84",
  color: "red",
  getdetails: function (hi) {
    console.log(this.bus, this.color, hi);

  }
}
let bus = {
  bus: "84/78",
  color: "Blue"
}
// car.getdetails.call(bus)
const ans = car.getdetails.bind(bus)
ans("bind method")

///object destructuring
let obj1={
  Name:"TRohan",
  age:20,
  address:{street:2,roodnumber:106},
  hob:[1,2,3]
}
const{Name:username,age,address:{street,roodnumber},hob:[a,b,c]}=obj1
console.log(username,age,street,roodnumber,a,b,c);
const{Name,...others}=obj1;
console.log(others);



