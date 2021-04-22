/**
 * As a programmer creating objects is one of the most common things that you will do.
 * It is so common that many of us never think twice about how we do it, but this can lead to incredibly messy code.
 *  This is where the builder pattern comes in.
 * The builder pattern is one of the best creational design patterns for creating complex objects without complicating
 * your constructors or code.
 * The best part about the builder pattern is that the new changes to JavaScript allow us to create extremely concise
 *  builders compared to the traditional way of creating builders.
 *
 *
 * Definition-
 *
 * The builder pattern is one of the best creational design patterns for creating
 * complex objects without complicating  constructors or code
 */

//before
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User(
  "Bob",
  undefined,
  undefined,
  new Address("12345", "Main St.")
);

/**
 * ##################################################################
 */
//after with traditional
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const builder = new UserBuilder("Bob");
const user = builder.setAddress(new Address("12345", "Main St.")).build();

/**
 * ##################################################################
 */
//after with modern
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone = "123-456-7890", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { address: new Address("12345", "Main St.") });
