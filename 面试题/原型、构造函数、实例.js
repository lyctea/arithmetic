// const instance = new Object();
// const prototype = Object.prototype;
//
// console.log(instance.__proto__ === prototype);
// console.log(prototype.constructor === Object);
// console.log(Object.prototype === prototype);
// console.log(instance.constructor === Object);

const Person = function() {};
Person.prototype.say = function() {
  console.log("say hello");
};

const person = new Person();

console.log(person.__proto__ === Person.prototype);
console.log(person.constructor === Person);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype.constructor === Person);
