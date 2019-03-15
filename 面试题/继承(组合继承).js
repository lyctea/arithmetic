/**
 * 组合继承；
 * 原型链继承和经典继承双剑合璧。
 *
 * 组合继承最大的问题是，调用两次超类的构造函数
 */

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 第二次调用Parent

  this.age = age;
}

Child.prototype = new Parent(); // 第一次调用Parent，得到name、colors两个属性
Child.prototype.constructor = Child;

var child1 = new Child("kevin", "18");

child1.colors.push("black");

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child("daisy", "20");

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
