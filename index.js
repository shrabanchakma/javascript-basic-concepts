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
// ==========================================================================VIDEO19 last revised (18 jan, 24)

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

// function generatePassword(
//   length,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowerCase ? lowerCaseChars : "";
//   allowedChars += includeUpperCase ? upperCaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if (length <= 0) {
//     return "Password length must be at least 1";
//   }
//   if (allowedChars.length === 0) {
//     return "At least one set of characters needs to be selected";
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIdx = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIdx];
//   }

//   return password;
// }

// const passLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// console.log(
//   generatePassword(
//     passLength,
//     includeLowerCase,
//     includeUpperCase,
//     includeNumbers,
//     includeSymbols
//   )
// );
// ==========================================================================VIDEO23

// callback - a function that is passed as an argument in another function
// used to asynchronous operations:
// 1. reading a file
// 2. network requests
// 3. interacting with databases

// hello(goodBye);
// goodBye();
// function hello(callBack) {
//   console.log("hello");
//   callBack();
// }

// function goodBye() {
//   console.log("goodBye");
// }

// function leave() {
//   console.log("leave");
// }

// sum(displayResult, 1, 4);

// function sum(callBack, x, y) {
//   let result = x + y;
//   callBack(result);
// }

// function displayResult(result) {
//   console.log(result);
// }

// ==========================================================================VIDEO24

// forEach() method iterates over each element and applies a specified function

// element, idx, array
// let fruits = ["apple", "banana", "watermelon", "orange"];
// // fruits.forEach(upperCase);
// // fruits.forEach(lowerCase);
// fruits.forEach(toCapital);
// fruits.forEach(displayElements);
// function toCapital(element, idx, array) {
//   array[idx] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function lowerCase(element, idx, array) {
//   array[idx] = element.toLowerCase();
// }

// function upperCase(element, idx, array) {
//   array[idx] = element.toUpperCase();
// }
// function displayElements(elements) {
//   console.log(elements);
// }

// ==========================================================================VIDEO25

// .map() method iterates over each element, applies a specified function and returns a new array

// const dates = ["2024-1-20", "2024-3-15", "2025-3-15"];

// const updatedDate = dates.map(formatDate);
// console.log(dates);
// console.log(updatedDate);
// function formatDate(element) {
//   const split = element.split("-");
//   return `${split[2]}.${split[1]}.${split[0]}`;
// }

// ==========================================================================VIDEO26

// filter() method filters elements and return a new array

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const evenNumbers = numbers.filter(isEven);
// const oddNumbers = numbers.filter(isOdd);
// console.log(evenNumbers);
// console.log(oddNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// const words = ["banana", "seaweed", "apple", "pineApple", "sugarcane"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);
// console.log(longWords);
// function getShortWords(element) {
//   return element.length <= 6;
// }

// function getLongWords(element) {
//   return element.length > 6;
// }

// ==========================================================================VIDEO26

// reduce() reduces to a single element

// const salary = [12, 34, 15, 16];

// const total = salary.reduce(sum);
// console.log(total);
// function sum(accumulator, element) {
//   return accumulator + element;
// }

// ==========================================================================VIDEO27
// function expressions - a way to define functions as values or variables;

// 1. callbacks in asynchronous operations
// 2. Higher order functions
// 3. Closures
// 4. Event listeners
// const numbers = [1, 2, 3, 4, 5, 6];

// const squareNums = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// console.log(squareNums);

// ==========================================================================VIDEO28

// arrow function = a concise way to write function expressions
// good for simple functions that you use only once
// (parameter) => some code

// setTimeout(() => console.log("hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const qubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((elements) => elements % 2 === 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);
// console.log(total);

// ==========================================================================VIDEO29

// object = A collection of related properties and methods
//          can represent real world objects (people, products, places)
// object = {
//              key::value,
//              function
//           }
// properties = "things that an object has"

// const person1 = {
//   name: "shraban",
//   age: 21,
//   goKick: () => console.log("Shraban is kicking"),
//   goPush: () => console.log("Shraban is pushing"),
// };

// person1.goKick();
// person1.goPush();

// ==========================================================================VIDEO29
// this - a keyword where it holds reference of the object where this is used
// the object depends on the immediate context

// const person1 = {
//   name: "shraban",
//   age: 21,
//   printAge: function () {
//     console.log(`shraban is ${this.age} year old`);
//   },
//   printName: function () {
//     console.log(`Hello my name is ${this.name}`);
//   },
// };

// person1.printAge();
// person1.printName();

// ==========================================================================VIDEO30
// constructor - constructor is a special method for defining properties and methods of objects

// function Person(name, age, income, address) {
//   (this.name = name),
//     (this.age = age),
//     (this.income = income),
//     (this.address = address),
//     (this.dialogue = function () {
//       console.log(`bro my income is ${income}`);
//     });
// }

// const empolyee1 = new Person("shraban", 21, 0, "uttara");
// const empolyee2 = new Person("ritesh", 21, 25000, "ctg");

// console.log(empolyee1.name);
// console.log(empolyee2.name);

// empolyee1.dialogue();
// empolyee2.dialogue();

// ==========================================================================VIDEO31
// class - (es6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
//
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProducts() {
//     console.log(` name: ${this.name}`);
//     console.log(`price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product("shirt", 50.5);
// product1.displayProducts();

// const totalPrice = product1.calculateTotal(0.05);

// console.log(`the total price will be: ${totalPrice}`);

// ==========================================================================VIDEO32

// static

// class MathUtils {
//   static PI = 3.14159;
//   static showResult(result) {
//     console.log(result);
//   }
//   static getDiameter(r) {
//     return r * 2;
//   }
//   static getCircumference(r) {
//     return 2 * this.PI * r;
//   }
// }

// console.log(MathUtils.PI);
// MathUtils.showResult(MathUtils.getDiameter(10));
// MathUtils.showResult(MathUtils.getCircumference(10));

// class User {
//   static userCount = 0;
//   constructor(userName) {
//     this.userName = userName;
//     User.userCount++;
//   }
//   static getUserCount() {
//     console.log(`Total Users are ${User.userCount}`);
//   }

//   sayHello() {
//     console.log(`Hello this is ${this.userName}`);
//   }
// }

// const user1 = new User("shraban");
// const user2 = new User("spongebob");
// const user3 = new User("pattrick");
// User.getUserCount();
// ==========================================================================VIDEO33
// inheritance - it allows new class to inherit properties and methods of another class(parent->child)
// Helps Follow the Dry Principle Don't Repeat YourSelf
// class Animal {
//   isAlive = true;

//   eat() {
//     console.log(`${this.name} is eating`);
//   }

//   attack() {
//     console.log(`${this.name} is attacking`);
//   }
// }

// class Cat extends Animal {
//   name = "meow meow";
// }

// class Dog extends Animal {
//   name = "bow bow";
// }

// class Snake extends Animal {
//   name = "ssssss";
// }

// const cat = new Cat();
// const dog = new Dog();
// const snake = new Snake();

// console.log(cat.isAlive);
// dog.attack();

// ==========================================================================VIDEO34
// super - keyword is used in classes to call the constructor or access the properties and methods of a parent(superClass)
// this = this object;
// super = the parent;
// super - can also be used to access parent class method inside of a child class method
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`${this.name} moves at ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   jump() {
//     console.log(`${this.name} is jumping`);
//     super.move(25);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`${this.name} is swimming`);
//     super.move();
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
//   goFly() {
//     console.log(`${this.name} is flying very fast.`);
//     super.move();
//   }
// }

// const rabbit = new Rabbit("honey bunny", 5, 12);
// const fish = new Fish("chak chak fish", 2, 14);
// const hawk = new Hawk("Fly Fly Hawk", 2, 14);

// rabbit.jump();

// ==========================================================================VIDEO35

// getter  -  special method that makes a property readable
// setter - special method that makes a property writable

// validate or modify a value while reading/writing a value

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("somethings wrong with your input");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("somethings wrong with your input");
//     }
//   }

//   get width() {
//     return this._width;
//   }

//   get height() {
//     return this._height;
//   }

//   get area() {
//     return this._width * this._height;
//   }
// }

// const rectangle = new Rectangle(7, 10);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.error("First name has to be a non-empty string");
//     }
//   }
//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.error("Last name has to be a non-empty string");
//     }
//   }
//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.error("Age must be non-negative number");
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }
//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }
//   get age() {
//     return this._age;
//   }
// }

// const person = new Person("shraban", "chakma", 21);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

// ==========================================================================VIDEO36

// destructuring - extract values from array and object and assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// Ex:1 swap two values
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a, b);

// Ex:2 swap two elements
// const colors = ["red", "green", "blue", "white", "pink"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Ex:2 to extract values

// const person1 = {
//   firstName: "shraban",
//   lastName: "chakma",
//   age: 24,
// };
// const person2 = {
//   firstName: "ritesh",
//   lastName: "chakma",
// };

// const { firstName, lastName, age = "N/A" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// Ex:3 Destructure in function parameter

// function displayPerson({ firstName, lastName, age }) {
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`He is ${age} years old`);
// }

// const person1 = {
//   firstName: "shraban",
//   lastName: "chakma",
//   age: 24,
// };
// const person2 = {
//   firstName: "ritesh",
//   lastName: "chakma",
// };

// displayPerson(person1);
// ==========================================================================VIDEO37
// nested objects - Objects inside of other objects
//                      allows you to represent more complex data structures
//                          child object is inclosed by the parent object

// const person = {
//   name: "ritesh",
//   age: 20,
//   girlFriends: {
//     g1: "antara",
//     g2: "anika",
//     g3: "banga",
//   },
// };

// for (const property in person.girlFriends) {
//   //   console.log(person.girlFriends[property]);
//   console.log(property);
// }

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person("shraban", 21, "street-19", "uttara", "dhaka");

// console.log(person1.address);

// ==========================================================================VIDEO37

// array of objects

// const fruits = [
//   {
//     name: "banana",
//     color: "yellow",
//     price: 10,
//   },
//   {
//     name: "apple",
//     color: "red",
//     price: 30,
//   },
//   {
//     name: "grapes",
//     color: "green",
//     price: 50,
//   },
// ];

// #using for
// for (const fruit of fruits) {
//   console.log(fruit.name);
// }

// #using map()
// const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames);

// #using filter()
// const budgetFruits = fruits.filter((fruit) => fruit.price <= 30);
// console.log(budgetFruits);

// #using reduce()
// const maxFruit = fruits.reduce((max, fruit) =>
//   fruit.price > max.price ? fruit : max
// );
// const minFruit = fruits.reduce((min, fruit) =>
//   fruit.price < min.price ? fruit : min
// );
// const totalPrice = fruits.reduce((total, fruit) => fruit.price + total, 0);

// console.log(maxFruit);
// console.log(minFruit);
// console.log(totalPrice);
// ==========================================================================VIDEO38
// #sort() - method used to sort elements of an array in place
// sorts elements as strings in lexicographic order, not alphabetical order

// const numbers = [3, 6, 2, 1, 8, 5, 3, 3];

// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);

// const people = [
//   { name: "stuart", age: 29 },
//   { name: "madMax", age: 15 },
//   { name: "steven", age: 77 },
//   { name: "jonny", age: 2 },
// ];

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => b.age - a.age);
// people.sort((a, b) => a.name.localeCompare(b.name));

// console.log(people);

// ==========================================================================VIDEO39
// Date() - objects that contains values that represent dates and times
// these date objects can be changed and formatted

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// const date = new Date();
// const year = date.setFullYear();
// const month = date.setMonth();
// const day = date.setDate();
// const hour = date.setHours();
// const minute = date.setMinutes();
// const seconds = date.setSeconds();
// const dayOfWeek = date.setDay();
// set parameters

// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(seconds);
// console.log(dayOfWeek);

// ==========================================================================VIDEO40

// #closure  -a function defined inside of another function, the inner function has access to the variables and scope of the outer function
// Allow for private variables and state maintenance

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(`the current count is: ${counter.getCount()}`);

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }
//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(5);
// game.decreaseScore(3);
// console.log(`current score is ${game.getScore()}`);

// ==========================================================================VIDEO41
// #setTimeOut(callback, time_in_milliseconds) function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)

// #clearTimeOut(timeOutId) = can cancel a timeout before it triggers

// function display() {
//   window.alert(`Hello World`);
// }

// setTimeout(display, 3000);

// setTimeout(function () {
//   window.alert("alerting you with anonymous function");
// }, 5000);

// setTimeout(() => window.alert("alerting you with arrow function"), 2000);

// let timeoutId;
// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello Bangla"), 3000);
// }

// function clearTimer() {
//   clearTimeout(timeoutId);
// }

// ==========================================================================VIDEO42
// (project 2)-world clock
/*
-------------html
   <div class="clock-container">
      <div class="clock">00:00:00</div>
    </div>
-------------css'
body {
  background-image: url(images/clockBgImg.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
}

.clock-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock {
  font-family: monospace;
  font-size: 6.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  backdrop-filter: blur(5px);
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.137);
}

*/

// function updateClock() {
//   const now = new Date();
//   let hours = now.getHours();
//   const meridiem = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12;
//   hours = hours.toString().padStart(2, 0);
//   const minutes = now.getMinutes().toString().padStart(2, 0);
//   const seconds = now.getSeconds().toString().padStart(2, 0);
//   const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//   console.log(timeString);
//   document.querySelector(".clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// ==========================================================================VIDEO43
// project(3)-stop watch

// #html
/*
 <h1 id="myH1">StopWatch</h1>
    <div id="container">
      <div id="display">00:00:00:00</div>
      <div id="controls">
        <button id="startBtn" onclick="start()">start</button>
        <button id="stopBtn" onclick="stop()">stop</button>
        <button id="resetBtn" onclick="reset()">reset</button>
      </div>
    </div>
    <script src="./index.js"></script>
*/

// #css

/*
 body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsla(0, 0%, 50%, 0.13);
}

#myH1 {
  font-size: 4rem;
  font-family: "Arial", sans-serif;
  color: rgb(66, 57, 57);
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 5px solid;
  border-radius: 50px;
  background-color: white;
}

#display {
  font-size: 5rem;
  font-family: monospace;
  font-weight: bold;
  color: hsla(0, 1%, 18%, 0.664);
  text-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.315);
  margin-bottom: 25px;
}

#controls button {
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  min-width: 125px;
  font-weight: bold;
  transition: background-color 0.5s ease;
}

#startBtn {
  background-color: hsl(115, 100%, 40%);
}
#startBtn:hover {
  background-color: hsl(115, 100%, 30%);
}
#stopBtn {
  background-color: hsl(10, 90%, 50%);
}
#stopBtn:hover {
  background-color: hsl(10, 90%, 40%);
}
#resetBtn {
  background-color: hsl(205, 90%, 60%);
}
#resetBtn:hover {
  background-color: hsl(205, 90%, 30%);
}

*/

// #javascript

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }
// function stop() {
//   clearInterval(timer);
//   elapsedTime = Date.now() - startTime;
//   isRunning = false;
// }
// function reset() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00";
// }
// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;
//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
//     .toString()
//     .padStart(2, 0);
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
//     .toString()
//     .padStart(2, 0);
//   let seconds = Math.floor((elapsedTime / 1000) % 60)
//     .toString()
//     .padStart(2, 0);
//   let milliseconds = Math.floor((elapsedTime % 1000) / 10)
//     .toString()
//     .padStart(2, 0);
//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

// ==========================================================================VIDEO44
// Es6 - An external file that contains reusable code
// that can be imported into other javascript files
// can contain variables, classes, functions.... and more
// Introduced as part of ECMAScript 2015 update
// import { PI, getCircumference, getArea } from "./mathUtils.js";

// console.log(PI);
// const circumference = getCircumference(10).toFixed(2);
// const area = getArea(10).toFixed(2);
// console.log(circumference);
// console.log(area);
// ==========================================================================VIDEO45
//  synchronous and asynchronous
// ==========================================================================VIDEO46

// Error = An object to represent the problems

// throw new Error("wow this is new error! do you like it??");

// try {} = encloses codes that might potentially cause errors
// catch{} = catches and handles any thrown error from try {}
// finally{} = Always executes.Used mostly for cleanup
//              ex.closing files, close connection and release resources

// try {
//   console.log("hi");
// } catch (error) {
//   console.error(error);
//   // network error
//   // promise rejection
//   // security error
// } finally {
//   // close files
//   // close connection
//   // release resources
//   console.log("finally executing");
// }

// console.log("reatched the end");
