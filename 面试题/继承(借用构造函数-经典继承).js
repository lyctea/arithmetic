/**
 * 借用构造函数(经典继承)
 *
 * 优点:
 * 1、避免了引用类型的属性被所有的实例共享
 * 2、可以在Child中想Parent传参
 *
 * 缺点：
 * 方法在都在构造函数中定义，每次创建实例都会创建一遍方法，造成不必要的开销
 *
 * @constructor
 */

function Parent() {
  this.names = ["kevin", "daisy"];
}

function Child() {
  // 在构造函数内部使用call将this指向新创建的实例
  Parent.call(this);
}

var child1 = new Child();

child1.names.push("yayu");

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
