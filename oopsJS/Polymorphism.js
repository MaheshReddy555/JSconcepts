
/*

Polymorphism in Object-Oriented Programming is an ability to create a property, a function, or an object that has more than one realization.

Polymorphism is an ability to substitute classes that have common functionality in sense of methods and data. 
In other words, it is an ability of multiple object types to implement the same functionality that can work in a different way but supports a common interface.



This Java OOP concept lets programmers use the same word to mean different things in different contexts.
One form of polymorphism in Java is method overloading. That’s when different meanings are implied by the code itself.
The other form is method overriding. 
That’s when the different meanings are implied by the values of the supplied variables. See more on this below.

*/
//overriding the method in child class (that method is actually from parent class)


//Inhertiance example
class person {
    constructor(name) {
      this.name = name;
    }
    //method to return the string
    toString() {
      return `Name of person: ${this.name}`;
    }
  }
  class student extends person {
    constructor(name, id) {
      //super keyword to for calling above class constructor
      super(name);
      this.id = id;
    }
    toString() {
      //this.name is inherited
      console.log(this.name);
      return `${super.toString()},Student ID: ${this.id}`;
    }
  }
  let student1 = new student("Mukul", 22);
  console.log(student1.toString());
  