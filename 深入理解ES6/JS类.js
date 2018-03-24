/**
 * ES5 的模拟类
 */

function PersonType(name) {
    this.name = name
}
PersonType.prototype.sayName = function() {
    console.log(this.name)
}
let person = new PersonType("Nicholas")
person.sayName() // 输出 "Nicholas"
console.log(person instanceof PersonType) // true
console.log(person instanceof Object) // true

/**
 * ES6总新增的类
 *
 */
class PersonClass {
    // 等价于 PersonType 构造器
    constructor(name) {
        this.name = name
    }
    // 等价于 PersonType.prototype.sayName
    sayName() {
        console.log(this.name)
    }
}
let person = new PersonClass("Nicholas")
person.sayName() // 输出 "Nicholas"
console.log(person instanceof PersonClass)
console.log(person instanceof Object)
console.log(typeof PersonClass)
