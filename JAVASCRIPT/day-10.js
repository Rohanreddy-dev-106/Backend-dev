//TODO: 10-08-25
//ES6 CLASSES

//Encapsulation

//Inhertance

//Static keyword

//getter and Setters

//Encapsulation
class VachileClass {
    //propertyes(we cant use let var const to define it in class space)
     #name;//# private propertyes
     #color;
     #year;
     static varname="rohan reddy"
    constructor(name,color,year) {
        this.#name=name;
        this.#color=color;
        this.#year=year
    }
    //methods
   
    // getdata(){
    //     console.log(this.#name,this.#color,this.#year);
    // }
    // static method1(){
    //     console.log("this is a static method");
        
    // }
     //private methods
    // #getNumber(){
    //     return 106;
    // }
}
const vec1=new VachileClass("BMW","BLUE",2025);
// console.log(VachileClass.varname);
console.log(vec1);

// console.log(VachileClass.method1());
// console.log(vec1.#getNumber())//not accesible outside of class

// vec1.getdata()
// console.log(vec1);

//Inhertance
class Car extends VachileClass{
    #name;
    #color;
    #brand;
    #year;
    constructor(name,color,brand,year){
        super(name,color,year)
        this.#name=name;
        this.#color=color;
        this.#brand=brand;
        this.#year=year;
    }
}
const car1=new Car("BMW2","RED","BMWE6",2026);
// car1.getdata()
// console.log(car1);

//getter and Setters

class Example {
    #_data//private property
  constructor(data) {
    this.#_data = data;
  }

  get data() {
    return this.#_data;
  }

  set Newdate(newValue) {
    console.log(`Incoming value: ${newValue}`);
    this.#_data = newValue;
  }
}

const obj = new Example("Hello");
obj.Newdate= "World"; // Incoming value: World
console.log(obj.data); // World
