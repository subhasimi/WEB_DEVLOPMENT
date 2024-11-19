
// Asynchronous Operation in JS

// Promise:
// Promise are used to handle async operations in js.
// They represent a value that may be available now, in the future, or never.
// It has 3 states :
// 1. Pending
// 2. Fulfilled
// 3. Rejected
// We can use the then() method to handle the fulfilled state and the catch() method to handle
// the rejected state.

// JSON:
// JSON stands for JavaScript Object Notation.
// It is a lightweight data interchange format that is easy to read and write.
// It is a string of text that represents a JavaScript object.
// JSON is used to exchange data between a server and a web application.
// JSON is a subset of the JavaScript language, so it can be easily parsed and generated by JavaScript
// JSON is used to store data in a structured format, it is easy to read and write,
// and it is language independent.

// Fetch method:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error Occured:", error);
//   });

// async and await
const fetchData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  // fetchData(); // call or invoke
  
  // The above code will fetch data from the given URL and log it to the console.
  // The try-catch block is used to handle any errors that may occur during the fetching process.
  // The async and await keywords are used to make the code look synchronous, but it's still asynchronous
  // under the hood.
  // The await keyword is used to pause the execution of the code until the promise is resolved or
  // rejected. The try-catch block is used to handle any errors that may occur during the execution
  // of the code.
  
  //setTimeout :
  // setTimeout() is used to execute a function once after a specified delay(in milliseconds)
  // Syntax: setTimeout(()=>{
  // code to be executed
  // },1000)
  
  const reminder = (task) => {
    console.log(`Reminder set for ${task}`);
    setTimeout(() => {
      console.log(`Time's up! ${task} is due`);
    }, 5000); // 5sec(5*1000)
  };
  
  // reminder("Drink water"); // call or invoke
  
  // setInterval :
  // setInterval() is used to repetedely execute a function after a specified interval(in milliseconds)
  // Syntax: setInterval(()=>{
  // code to be executed
  // },1000)
  
  const countDown = (seconds) => {
    let counter = seconds;
    let intervalID = setInterval(() => {
      if (counter === 0) {
        clearInterval(intervalID);
      } else {
        console.log(`Need to wait for ${counter}secs`);
        counter--;
      }
    }, 1000);
  };
  
  countDown(10);
  