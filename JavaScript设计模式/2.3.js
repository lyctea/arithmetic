/**
 * 基于原型链的继承模式
 */

//声明父类
function SuperClass() {
    this.superValue = true
}

// 为父类添加方法
SuperClass.prototype.getSupervalue = function() {
    return this.superValue
}

// 声明子类
function SubClass() {
    this.subValue = false
}

SubClass.prototype = new SuperClass()

// 为子类添加方法
SubClass.prototype.getSubvalue = function() {
    return this.subValue
}

// 实例化的对象
var instance = new SubClass()
console.log(instance.getSubvalue())
console.log(instance.getSupervalue())
console.log(SuperClass.prototype)
