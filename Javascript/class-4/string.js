// String :
// String is a primitive data type in JavaScript. It is used to represent a sequence of characters.
// collections of characters.
// It is used to represent text data.

// How to define
// 1. Using single quotes
let str1 = "Hello, World!";
// console.log(str1);

// 2. Using double quotes
let str2 = "Hello, World!";
// console.log(str2);

// 3. Using backticks (template literals)
let str3 = `Hello, World!`;
// console.log(str3);

// 4. Using new String()
let str4 = new String("Hello, World!");
// console.log(str4);

// My Details :
// Name : Pramod
// Age : 25
// Address : Bangalore
// Contact : 1234567890

let name = "Pramod";
let age = "25";
let address = "Bangalore";
let contact = "1234567890";

console.log(name);
console.log(age);
console.log(address);
console.log(contact);

console.log("My details :", name, age, address, contact); // My details : Pramod 25 Bangalore 1234567890
console.log("My details:" + name + age + address + contact); // My details:Pramod25Bangalore1234567890
console.log(
  `My name is ${name}, my age is ${age}, my address is ${address} and my contact no is ${contact}`
);

// My name is Pramod, my age is 25, my address is Bangalore and my contact no is 1234567890

// Fun fact :
let score1 = "100";
let score2 = 200;

let number = "Pramod";
console.log(typeof number); // string

let string = 5.23;
console.log(typeof string); // number

let name_string = "Pablo";
// length: 5
// Start-index: 0
// Last-Index = 5 - 1 = 4
console.log(name_string.length); // 5
console.log(`Last index: ${name_string.length - 1}`); // Last index: 4
console.log(name_string[2]); // b
console.log(name_string[4]); // o
console.log(name_string[name_string.length - 1]); // o
console.log(name_string.toUpperCase()); // PABLO
console.log(name_string.__proto__); // {}
console.log(name_string.__proto__.__proto__); // {}
console.log(name_string.charAt(2)); // b
console.log(name_string.indexOf("o")); // 4

const url = "pramodjena.github.io";
console.log(url.replace(".", "-")); // pramodjena-github.io
const email = "pramod@gmail@yahoo@ios.com";
console.log(email.replace("@", ".")); // pramod.gmail@yahoo@ios.com

const mail = "pramodjena.com";
console.log(mail.includes(".com")); // true
console.log(mail.includes("@yahoo")); // false

const company_name = new String("WeCode");
console.log(company_name); // [String: 'WeCode']