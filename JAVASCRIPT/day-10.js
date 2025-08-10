//TODO: 10-08-25
//ES6 CLASSES

//Encapsulation

//Inhertance


//Encapsulation
class VachileClass {
    //propertyes(we cant use let var const to define it in class space)
     #name;//# private propertyes
     #color;
     #year;
    constructor(name,color,year) {
        this.#name=name;
        this.#color=color;
        this.#year=year
    }
    //methods
   
    getdata(){
        console.log(this.#name,this.#color,this.#year);
    }
     //private methods
    #getNumber(){
        return 106;
    }
}
const vec1=new VachileClass("BMW","BLUE",2025);
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
car1.getdata()
console.log(car1);

