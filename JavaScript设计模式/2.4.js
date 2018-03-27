/**
 * 组合继承：解决父类的引用属性被修改和只能通过构造函数初始化，而不能使用原型方法的问题
 */

// 父类
function SuperClass(name) {
    this.name = name
    this.books = ["1", "2"]
}

SuperClass.prototype.getName = function() {
    console.log(this.name)
}

//子类
function SubClass(name, time) {
    // 从构造函数式继承父类属性
    SuperClass.call(this, name)
    this.time = time
}

//使得子类可以使用父类的原型方法
SubClass.prototype = new SuperClass()
//子类拥有的原型方法
SubClass.prototype.getTime = function() {
    console.log(this.time)
}

/**
 * 实例化定义好的类
 */
var instance1 = new SubClass("Js book", 2014)
instance1.books.push("设计模式")
console.log(instance1.books)
instance1.getTime()
instance1.getName()

console.log("-----")

var instance2 = new SubClass("no book", 2013)
instance2.books.push("高级程序设计")
console.log(instance2.books)
instance2.getTime()
instance2.getName()
