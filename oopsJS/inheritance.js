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
