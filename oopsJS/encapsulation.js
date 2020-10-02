//encapsulation example

// Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation.

class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
}

let person1 = new person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();

// Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail.
//Most of the OOP languages provide access modifiers to restrict the scope of a variable,
// but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object.
// Abstraction example
function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last  
            name is: ${lastname}`;
  };

  this.getDetails_access = function () {
    return `First name is: ${firstname}, Last  
            name is: ${lastname}`;
  };
}
let person1 = new person("Mukul", "Latiyan");
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());
