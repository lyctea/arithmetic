/*
 * 寄生式继承,最终的方案 * */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(child, parent) {
  const prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 使用方式
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  console.log(this.age);
};

// 实例化
const child = new SubType("lyc", 28);
child.sayName();
child.sayAge();
console.log(child.colors);
