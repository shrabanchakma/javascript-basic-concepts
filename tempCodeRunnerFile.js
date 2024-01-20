const person1 = {
  name: "shraban",
  age: 21,
  printAge: () => console.log(`shraban is ${this.age} year old`),
  printName: () => console.log(`Hello my name is ${this.name}`),
};

person1.printAge();
person1.printName();
