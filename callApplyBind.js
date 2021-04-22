/**
 * Call and Apply are interchangeable. 
 * You can decide whether it’s easier to send in an array or a comma separated list of arguments. 
 * Bind is different. It always returns a new function.
We can use Bind to curry functions like in the example.
 We can take a simple hello function and turn it into a helloJon or helloKelly. 
 You can use it for events where we don’t know when they’ll be fired but know what context is.
 */

let customer1 = { name: "Leo", email: "leo@gmail.com" };
let customer2 = { name: "Nat", email: "nat@hotmail.com" };

function greeting(text) {
  console.log(`${text} ${this.name}`);
}

greeting.call(customer1, "Hello"); // Hello Leo
greeting.call(customer2, "Hello"); // Hello Nat

//apply
let customer1 = { name: "Leo", email: "leo@gmail.com" };
let customer2 = { name: "Nat", email: "nat@hotmail.com" };
function greeting(text, text2) {
  console.log(`${text} ${this.name}, ${text2}`);
}
greeting.apply(customer1, ["Hello", "How are you?"]); // output Hello Leo, How are you?
greeting.apply(customer2, ["Hello", "How are you?"]); // output Hello Natm How are you?

//bind
/**
 * The Bind method returns a new function, allowing you to pass in a this array and any number of arguments.
 * Use it when you want that function to later be called with a certain context like events.
 */
let customer1 = { name: "Leo", email: "leo@gmail.com" };
let customer2 = { name: "Nat", email: "nat@hotmail.com" };
function greeting(text) {
  console.log(`${text} ${this.name}`);
}
let helloLeo = greeting.bind(customer1);
let helloNat = greeting.bind(customer2);
helloLeo("Hello"); // Hello Leo
helloNat("Hello"); // Hello Nat

// The Bind implementation would be like this:
Function.prototype.bind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context, arguments);
  };
};
