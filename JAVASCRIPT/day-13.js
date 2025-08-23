function timer() {
  for (let i = 1; i <= 5; i++) {
      setTimeout(
          function () {
              //Write your code here...
              console.log(i);
          } //write your code here...);

      
    ,i*1000);
  }
  console.log("Hello ninjas!");
}
// timer();
let count=0;
 const clear=setInterval(() => {
    count++
    console.log(count);
     console.log(clear);
 }, 1000);

 

// Do not edit the rest of the code
