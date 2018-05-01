/**
 * 传统的方法是通过构造函数模拟类
 */
var Animal = function(name) {
    this.name = name
}

console.log(new Animal("cat"))

/**
 * ES6 中新增的 class 关键字
 */

class Animal2 {
    constructor(name) {
        this.name = name
    }
}

console.log(new Animal2("cat2"))
