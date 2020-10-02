// Object– An Object is a unique entity which contains property and methods.
// For example “car” is a real life Object, which have some characteristics like color, type, model, horsepower and performs certain action like drive.
//The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. An Object is an instance of a class.
//Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string.

//Defining object
let person = {
  first_name: "Mukul",
  last_name: "Latiyan",

  //method
  getFunction: function () {
    return `The name of the person is  
          ${person.first_name} ${person.last_name}`;
  },
  //object within object
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },
};
console.log(person.getFunction());
console.log(person.phone_number.landline);

//using a constructor
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person("Mukul", "Latiyan");
let person2 = new person("Rahul", "Avasthi");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Object.create() example a
// simple object with some properties
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I  
          studying?: ${this.isStudying}.`);
  },
};
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = "Mukul";

// Inherited properties can be overwritten
me.isStudying = "True";

me.printIntroduction();
