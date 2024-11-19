//  Task-1
// let sum = (num1, num2 = 8) => {
//   return num1 + num2;
// };
// let output = sum(5);
// console.log(output);

// function Person() {
//   this.name = "surya";
//   this.age = 23;
// console.log(this);
/// const person = new Person();
// console.log(person);

// this keyword :
// this keyword refers to an object which is currently execute a function.
// this keyword refers to the global window in traditional function.
// this keyword refers to an object in arrow function.

// Example:
// function calling() {
//   console.log(this);
// }
// calling();

// const hello = () => {
// console.log(this);
// };
// hello();

// const person = {
//   name: "Pablo",
// greet: function () {
// Function is methods.
// console.log(this.name);  // Here this refers to an object.
// },
//   greet: () => {
//     console.log(this.name);   // Here this doesnot refers to an object.
//   },
// };
// person.greet();

// Constructor() :
// A constructor() is a function to create new objects using new keyword.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Suryasnata", 23);
// const person2 = new Person("Swikruti", 30);
// const person3 = new Person("Soubhagya", 25);

// console.log(person1);
// console.log(person2);
// console.log(person3);

// callback() :
// A callback() is a function that is passed as an arguement in an another function.

// function car(name) {
//   console.log(Hey i am ${name});
// }

// function model(callback) {
//   const name = "Harrier";
//   callback(name);
// }
// model(car);

// function hello(name, x) {
//   console.log(Hello i am ${name});
//   x();
// }

// function bye() {
//   console.log(Bye);
// }

// hello("Subhasmita", bye);

// Clouser
// A clouser is a function that basically remembers it's outer function variable even after the outer function returned.

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// console.log();
// }

// let increment = counter(); // call or invoke
// increment(); // call or invoke

// Promise
// A promise is a result of an operation that hasn't completed yet, but is expected to resolve
// with a value at some point in the future. It's used to handle asynchronous operations in JavaScript

// A promise has 3 states
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Example:
// let state = false;
// const promise = new Promise((resolve, reject) => {
//async operation/
//   if (state) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });
// console.log(promise);

// Higher order function

// Double the value
// const array1 = [1, 4, 9, 16];
// for (let i = 0; i < array1.length; i++) {
//   array1[i] = array1[i] * 2;
// console.log(array1);
// }
// console.log(array1);

// Find out odd number
// const array2 = [1, 4, 9, 16];
// for (let i = 0; i < array2.length; i++) {
//   if (array2[i] % 2 !== 0) {
//     console.log(`The odd no: ${array2[i]}`);
//   }
// }

// Map:
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// const newArray = array1.map((el, i) => {
// console.log(el * 2);
//   console.log(i);
// return el * 2;
// });
// console.log(newArray);

// array1.map((el) => console.log(el + 1));

// Filter
// chars greater than 6
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const longWords = words.filter((word) => word.length > 6);
// console.log(longWords);
// const filteredArray = words.filter((el, i) => {
//   return el.length > 6;
// });
// console.log(filteredArray);

// Odd
// const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17];
// const oddNumbers = numbers.filter((el, i) => {
//   return el % 2 !== 0;
// });
// console.log(oddNumbers);





// const map1 = new Map();

// map1.set();
// map1.set(1, 'foo');

// console.log(map1.size);
// Expected output: 2

// map1.clear();

// console.log(map1.size);
// Expected output: 0