//TODO: Date: 25-08-25

// How setTimeout and setInterval work for delayed/repeated actions
// How promises in JavaScript go from "pending" → "fulfilled"/"rejected"
// That .then(), .catch(), and .finally() handle promise results
// Fetch API()
//async and await

// ---------------- Timer with setTimeout ----------------
// function timer() {
//   for (let i = 1; i <= 5; i++) {
//       setTimeout(
//           function () {
//               // Logs i after i seconds (1 to 5)
//               console.log(i);
//           },
//           i * 1000
//       );
//   }
//   console.log("Hello ninjas!"); // Runs immediately before numbers
// }
// timer();


// ---------------- Counter with setInterval ----------------
// let count = 0;
// const clear = setInterval(() => {
//   count++;
//   if (count === 5) {
//     clearInterval(clear); // stops interval after 5
//   }
//   console.log(count); // logs 1,2,3,4,5 every second
// }, 1000);


// ---------------- Promise Example ----------------
const responce = new Promise((resolve, reject) => {
  // After 3 seconds, resolve the promise with an object
  setTimeout(() => resolve({ firstName: "Rohan", age: 20 }), 3000);
})
  .then((value) => {
    // This runs when promise is fulfilled
    console.log(value);     // logs the resolved object
    console.log(responce);  // logs the promise itself (fulfilled state)
  })
  .catch((value) => console.log(value))   // handles rejection if any
  .finally(() => console.log("Finally")); // always runs

// Logs promise immediately (in <pending> state)
// console.log(responce);

// Fetch API()
function API() {
  const req = fetch('https://dummyjson.com/poss');

  req.then((value) => {
    if (!value.ok) {
      throw new Error("Error!....")
    }
    return value.json();
  }).then((value) => console.log(value)).catch((err) => console.warn(err));

}
// API()
async function datafetch() {
  try {
    const data = await fetch("https://dummyjson.com/posts");
    const data2 = await fetch("https://dummyjson.com/posts");
    if (!data.ok && !data2.ok) {
      throw new Error("No data found");
    }
    const [d1, d2] = [await data.json(), await data2.json()];
    console.log(d1);


    return [...d1.posts, ...d2.posts];
  }
  catch (error) {
    console.error(error)
  }

}

async function main() {
  const result = await datafetch();
  const ans = result.filter((value) => value.id % 2 == 0);
  console.log(ans);

}

main();



