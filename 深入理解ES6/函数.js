/**
 * 函数的默认参数，例如需要回调函数，但第二项的timeout不是必须的参数，
 * 可以传入undefined占位，但是传入null
 */
function makeRequest(url, timeout = 2000, callback = function() {}) {
    url = "test"
    console.log(arguments[0])
}

// makeRequest(null, undefined)

function mixArgs(first, second = "b") {
    console.log(arguments.length)
    console.log(first === arguments[0])
    console.log(second === arguments[1])
    first = "c"
    second = "d"
    console.log(first === arguments[0])
    console.log(second === arguments[1])
}

// mixArgs("a")

/**
 * 可以通过一个函数来产生默认参数，
 * 也可以将第一个参数作为该函数的参数，使得两个参数之间产生关联
 */
function getValue() {
    return 5
}
function add(first, second = getValue()) {
    return first + second
}
// console.log(add(1, 1)) // 2
// console.log(add(1)) // 6

/**
 * 这里报错 “second is not defined”，
 *
 * 当参数1使用undefined会触发默认参数行为，此时secon尚未定义，
 * second的暂时性死区
 *
 * JS 调用 add(1) 可表示为
 * let first = second;
 * let second = 1
 */
function add(first = second, second) {
    return first + second
}
// console.log(add(undefined, 1))
// console.log(add(null, 1))

function multi(a, b) {
    console.log(arguments)
}

// multi(1, 2, 3, 3)

/**
 * 函数构造器
 */

var add = new Function("first", "second", "return first + second")
//console.log(add(1, 1))

/**
 *
 */
let values = [25, 50, 75, 100]
// console.log(Math.max.apply(Math, values)) // 100

/**
 * 名称属性
 */
var doSomething = function doSomethingElse() {
    // ...
}
var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name)
    }
}
// console.log(doSomething.name)
// console.log(person.sayName.name)
// "doSomethingElse"
// "sayName"
var descriptor = Object.getOwnPropertyDescriptor(person, "firstName")
// console.log(descriptor.get.name) // "get firstName"
// console.log(descriptor) // "get firstName"

function Person(name) {
    this.name = name
}
var person = new Person("Nicholas")
var notAPerson = Person("Nicholas")
// console.log(person) // "[Object object]"
// console.log(notAPerson) // "undefined"

// function add(a, a) {}

// const addArrow = (a,a) => {

// }

// console.log(add(1, 1))

/**
 * 创建立即调用函数表达式
 * 译注:使用传统函数时， (function(){})(); 与 (function(){}());
 * 这两种方式都是可行的。
 * 但若使用箭头函数，则只有下面的写法是有效的: (() => {})();
 */

let person1 = (function(name) {
    return {
        getName: function() {
            return name
        }
    }
})("Nicholas")

let person2 = (name => {
    return {
        getName: function() {
            return name
        }
    }
})("Nicholas")

// console.log(person1.getName())
// "Nicholas"
