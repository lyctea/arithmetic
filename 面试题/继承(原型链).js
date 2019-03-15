/**
 * 最基础的原型链继承的方式，
 * 其存在的问题：
 * 引用类型的属性将被实例共享,
 *
 */

function parent() {
  this.name = "luoyecong";
  this.address = ["guagnzhou", "xian"];
}

parent.prototype.say = function() {
  console.log(this.name);
};

function Child() {}

Child.prototype = new parent();

const chile1 = new Child();
const chile2 = new Child();

chile1.address.push("shenzhen");

// address作为引用类型将被实例共享
console.log(chile2.address);
