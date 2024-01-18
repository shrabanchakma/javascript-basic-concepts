/*
// ==========================================================================VIDEO01
let fullName = "shraban";
let age = 20;
let isStudent = true;
console.log(typeof personName);
console.log(typeof age);
console.log(typeof forSale);

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `Am i a student? ${isStudent}`;*/

// ==========================================================================VIDEO02

// arithmetic operators = operands (values, variables etc)
//                          operators(+,-,*,/)

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 3;
// students = students % 2;

// ##Augmented Assignment Operators

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// #increment decrement operators
// students++;
// students--;

/* 
    operator precedence 
        1.parenthesis()
        2.exponents
        3.multiplication & division & modulo
        4.addition & subtraction
 */

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 1+ 6 + 16 ;

// let result = (12 % 5) + 8 / 2;
// let result = 6 / 2 ** (2 + 5);

// console.log(result);

// ==========================================================================VIDEO03
// How to accept user input

// 1.window prompt
// 2.HTML textBox

// let userName = window.prompt("what is you name?");
// console.log(userName);

// let userName;

// document.getElementById("submit").onclick = function () {
//   userName = document.getElementById("myText").value;
//   document.getElementById("myName").textContent = `Hello ${userName}`;
// };

// ==========================================================================VIDEO04

// let age = window.prompt("what is your age?");
// age = Number(age);
// age += 1;

// console.log(age);

// let a = "pizza";   --will output NaN since these are non-numeric characters
// let b = "pizza";
// let c = "pizza";

// let a = "0";
// let b = "0";
// let c = "0";

// let a = "";
// let b = "";
// let c = "";

// let a;  --here we're trying to convert undefined variables int different data types
// let b;
// let c;

// a = Number(a);
// b = String(b);
// c = Boolean(c);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);

// ==========================================================================VIDEO05

// const PI = 3.1416;
// let radius;
// let circumference;

// document.getElementById("submit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("answer").textContent = circumference + " cm";
// };
// ==========================================================================VIDEO06 (project1)
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function () {
//   count++;
//   countLabel.textContent = count;
// };

// decreaseBtn.onclick = function () {
//   count--;
//   countLabel.textContent = count;
// };

// resetBtn.onclick = function () {
//   count = 0;
//   countLabel.textContent = count;
// };

// ==========================================================================VIDEO07
// const min = 50;
// const max = 150;
// const randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// --------------------random number generator

// const min = 1;
// const max = 6;
// const rollBtn = document.getElementById("rollBtn");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");

// rollBtn.onclick = function () {
//   label1.textContent = Math.floor(Math.random() * max) + min;
//   label2.textContent = Math.floor(Math.random() * max) + min;
//   label3.textContent = Math.floor(Math.random() * max) + min;
// };

// ==========================================================================VIDEO08

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterBtn = document.getElementById("masterBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const submitBtn = document.getElementById("submitBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");
// submitBtn.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = "you have subscribed";
//   } else {
//     subResult.textContent = "you have not subscribed";
//   }

//   if (visaBtn.checked) {
//     paymentResult.textContent = "you are paying with visaCard";
//   } else if (masterBtn.checked) {
//     paymentResult.textContent = "you are paying with masterCard";
//   } else if (paymentResult.checked) {
//     paymentResult.textContent = "you are paying with payPal";
//   } else {
//     paymentResult.textContent = "you must select payment type";
//   }
// };

// ==========================================================================VIDEO09
// let age = 21;
// const message = age >= 18 ? "you are an adult" : "you are a minor";

// console.log(message);

// const isStudent = false;

// const message = isStudent ? "you are a student" : "you are not a student";
// console.log(message);

// let day = 1;

// switch (day) {
//   case 1:
//     console.log(`its day ${day}`);
//     break;
//   case 2:
//     console.log(`its day ${day}`);
//     break;
//   case 3:
//     console.log(`its day ${day}`);
//     break;
//   case 4:
//     console.log(`its day ${day}`);
//     break;
//   case 5:
//     console.log(`its day ${day}`);
//     break;
//   case 6:
//     console.log(`its day ${day}`);
//     break;
//   case 6:
//     console.log(`its day ${day}`);
//     break;
//   default:
//     console.lof("there's not dat for you ");
// }

// const testScore = 30;
// let grade;

// switch (true) {
//   case testScore >= 90:
//     grade = "A";
//   case testScore >= 80:
//     grade = "B";
//   case testScore >= 70:
//     grade = "c";
//   default:
//     grade = "you just failed";
// }

// console.log(grade);

// ==========================================================================VIDEO10

// let myName = "shRabAn";

// console.log(myName.charAt(1));
// console.log(myName.indexOf("a"));
// console.log(myName.lastIndexOf("a"));
// console.log(myName.length);
// console.log(myName.trim()); // trim function removes the white spaces after the string or before the string;
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// secondName = myName.trim();
// console.log(secondName.repeat(5));

// const result = myName.startsWith(" ");
// const result = myName.endsWith(" ");
// const result = myName.includes("h");

// if (result) {
//   console.log("your name cannot include an ' ' ");
// } else {
//   console.log(`your name is ${myName}`);
// }

// let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", "");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(20, "0");
// phoneNumber = phoneNumber.padEnd(20, "0");
// console.log(phoneNumber);

//const fullName = "shraban chakma";

// const firstName = fullName.slice(0, fullName.indexOf(" "));
// const lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(lastName);
// const firstName = fullName.slice(-6);
// console.log(firstName);

// const email = "user1@gmail.com";

// const userName = email.slice(0, email.indexOf("@"));
// const extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);

// ==========================================================================VIDEO11
// #it's a technique
// Method chaining = calling one method after another in a continuous line of code

// take input from the user and make the first character uppercase and the rest of it lower case

// let userName = window.prompt("please enter your username");

// userName =
//   userName.trim().toUpperCase().charAt(0) +
//   userName.trim().slice(1).toLowerCase();

// console.log(userName);

// ==========================================================================VIDEO12

// logical operators = used to combine or manipulate bolean values

// AND = &&
// OR = ||
// NOT = !

// ==========================================================================VIDEO13

/*
 = assignment operator
 == comparison operator (compares if values are equal)
 === strict equality operator (compares if the values and data types are equal)
 != inequality operator
 !=== strict inequality operator
*/

// ==========================================================================VIDEO14
// while loop = repeat some code if some condition are true

// learn mutable vs non-mutable

// let justArray = new Array(10);

// console.log(justArray);

// let fig;
// fig = null;
// console.log(fig);

// ==========================================================================VIDEO15

// for loop
// continue
// break
// ==========================================================================VIDEO15
// number guessing game
// const minNum = 50;
// const maxNum = 100;

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + 50;

// let attempts = 0;
// let guess;
// let running = true;
// while (running) {
//   guess = window.prompt(`guess a number between ${minNum} to ${maxNum}`);
//   guess = Number(guess);
//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("please enter a valid number");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("Too Low!! Try Again ");
//     } else if (guess > answer) {
//       window.alert("Too high! Try Again");
//     } else {
//       window.alert(
//         `Correct! The answer is ${answer} Total attempts are ${attempts}`
//       );
//       running = false;
//     }
//   }
// }

// ==========================================================================VIDEO16

// #function

// function isValidEmail(email) {
//   email = email.toLowerCase();
//   return email.includes("@gmail.com")
//     ? "This is valid email"
//     : "This is not a valid email";
// }

// console.log(isValidEmail("shrabanchakma@gmail.com"));

// ==========================================================================VIDEO17

// #variable scope
// (Local and Global)
// let x = 3;
// function1();
// function function1() {
//   let x = 1;
//   console.log(x);
// }

//first it will check for the local variable and than global variable

// ==========================================================================VIDEO18
//

//

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const submitButton = document.getElementById("submitButton");
// const result = document.getElementById("result");
// let temp;
// function convert() {
//   if (toFahrenheit.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(1) + "°F";
//   } else if (toCelsius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = temp.toFixed(1) + "°C";
//   } else {
//     result.textContent = "Select a unit";
//   }
// }
// ==========================================================================VIDEO19

// introduction to array

// let fruits = ["banana", "orange", "apple"];

// // fruits.push("mango");
// // fruits.pop();
// // fruits.unshift("mango");
// // fruits.shift();

// // const length = fruits.length;
// // let index = fruits.indexOf("orange");

// // fruits.sort().reverse();
// fruits.reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// ==========================================================================VIDEO20

// spread elements  = ... allows an iterable such as array or string to be expanded into separate elements

// const numbers = [4, 5, 6, 1, 6, 5, 2, 1];
// const maxNum = Math.max(...numbers);
// const minNum = Math.min(...numbers);
// console.log(minNum);

// const userName = "shraban";
// const convertedUserName = [...userName].join("-");

// console.log(convertedUserName);

// const fruits = ["apple", "orange", "banana"];
// const vegetables = ["carrots", "celery", "potatoes"];

// const foods = [...fruits, ...vegetables, "pizza", "chips"];

// console.log(foods);

// ==========================================================================VIDEO21

// rest parameters = (...rest)
// spread = expands an array into separate elements
// rest-parameter = bundles separate elements into an array

// const friend1 = "nafiz";
// const friend2 = "moin";
// const friend3 = "fuad";
// const friend4 = "ishtiaq";
// const friend5 = "zerin";
// const friend6 = "shapla";
// const friend7 = "anika";

// const friends = [];

// function addFriends(...friends) {
//   console.log(friends);
//   return friends;
// }

// addFriends(friend1, friend2, friend3, friend4, friend5, friend6, friend7);

// function sum(...numbers) {
//   let total = 0;

//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }

// console.log(sum(1, 3, 5, 6, 7, 8, 9));

// function cobineString(...strings) {
//   return strings.join(" ");
// }

// console.log(cobineString("Mr", "Shraban", "Chakma"));
// ==========================================================================VIDEO22

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return "Password length must be at least 1";
  }
  if (allowedChars.length === 0) {
    return "At least one set of characters needs to be selected";
  }

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIdx];
  }

  return password;
}

const passLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

console.log(
  generatePassword(
    passLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  )
);
