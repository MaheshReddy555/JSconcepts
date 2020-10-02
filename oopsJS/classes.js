// Classes– Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation.
// Before we move further into implementation, we should know unlike other Object Oriented Language there is no classes in JavaScript we have only Object.
//To be more precise, JavaScript is a prototype based object oriented language, which means it doesn’t have classes rather it define behaviors using constructor function and then reuse it using the prototype.

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

// Defining class in a Traditional Way.
function Vehicle(name, maker, engine) {
  (this.name = name), (this.maker = maker), (this.engine = engine);
}

Vehicle.prototype.getDetails = function () {
  console.log("The name of the bike is " + this.name);
};

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
