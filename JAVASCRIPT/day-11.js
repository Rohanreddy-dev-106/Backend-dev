//TODO: 11-08-25

//Build-in Classes in JS

//regexp Expressions

//JSON

//Shollow and deep  copy


//date
const today=new Date();
console.log(today);
let s=String(today)
console.log(s.slice(-8,-1));

const someday=new Date("2004-04-25")
console.log(someday.toDateString());

// Using the RegExp constructor
// -------------------------------------------
// 1. Creating a regular expression
// -------------------------------------------

// Using the RegExp constructor — takes a string pattern
let regex = new RegExp("pattern");

// (Alternative) Using literal syntax with flags
// var regex = /pattern/g;   // 'g' means global search (find all matches)

// -------------------------------------------
// 2. Testing the regex
// -------------------------------------------

console.log(regex); 
// Output: /pattern/  (default flags: none, pattern is 'pattern')

// Example text to test against
var text = "This is a pattern pattern example.";

// regex.test(string) → returns true if at least one match exists
var isMatch = regex.test(text);
console.log(isMatch); // true (because "pattern" is found)

// -------------------------------------------
// 3. Executing the regex
// -------------------------------------------

// regex.exec(string) → returns an array with match info, or null if no match
var result = regex.exec(text);
console.log(result);  
// Example output: ["pattern", index: 10, input: "This is a pattern pattern example.", groups: undefined]
// - result[0] = the matched substring ("pattern")
// - index = starting position of the match in the string
// - input = the original string

// -------------------------------------------
// 4. Searching for regex in a string
// -------------------------------------------

// string.search(regex) → returns the index of the first match, or -1 if not found
var index = text.search(regex);
console.log(index);  // 10  (first "pattern" starts at position 10)

// -------------------------------------------
// 5. Replacing matches
// -------------------------------------------

// string.replace(regex, replacement) → replaces first match by default
var modifiedText = text.replace(regex, "new pattern");
console.log(modifiedText); 
// "This is a new pattern pattern example."
// Note: Only the first "pattern" is replaced because no 'g' (global) flag was set

// -------------------------------------------
// 6. Splitting using regex
// -------------------------------------------

// regex2 matches one or more commas or spaces
var regex2 = /[, ]+/g;

// Example text to split
var text = "Apple, Banana, Orange";

// string.split(regex) → splits string into an array, using regex matches as separators
var fruits = text.split(regex2);
console.log(fruits); 
// ["Apple", "Banana", "Orange"]
// Here, commas and spaces are treated as separators


//JSON
// {
//   "name": "Rohan",
//   "age": 25,
//   "isStudent": false,
//   "skills": ["Java", "JavaScript", "Python"],
//   "address": {
//     "city": "Hyderabad",
//     "zip": "500001"
//   }
// }

//Shollow  coppy

let data={
    Username:"ROHAN_106",
    age:20,
    Marks:{
        Maths:100,
        evs:60,
        total:[106]
    },
    getName(){
    console.log("hi");
    
    }
}


let update={...data};
update.Marks.evs=66;//it will change data object also becouse of shalllow copy
update.Marks.total[0]=100;
console.log(data);
console.log(update);

//deep copy 

let deepcopy=JSON.parse(JSON.stringify(data));

deepcopy.Username="SAI";
deepcopy.Marks.evs=106;
console.log(deepcopy);

//  let obj= Object.create(data)
//  obj.getName()



