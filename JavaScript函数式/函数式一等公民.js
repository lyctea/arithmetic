/**
 *  函数式一等公民，它可以作为变量被使用，可以作为参数传递给另一个函数，可以作为返回值，可以被赋值到另一个变量
 */

/**
 * 函数作为常量
 */

const constFunctoin = () => {
    console.log("Hello There!")
}

// console.log( constFunctoin());

/**
 * 函数作为对象属性被使用
 */
const functionAsObjectProperty = {
    print: value => console.log(value)
}

// functionAsObjectProperty.print("mic check"); // "mic check"

/**
 * 函数作为数组元素被使用
 */
const sum = (x, y) => x + y
const sub = (x, y) => x - y

const arryOfFunction = [sum, sub]
// console.log(arryOfFunction.toString())

/**
 * 函数作为高阶组件被使用
 * 将函数作为另一个函数的参数，比较常见的例子是在回调函数中
 */

// const jsonfile = require("jsonfile")
// const file = "/tmp/data.json"
// const obj = { name: "JP" }

// const errorLoggerFunction = err => console.error(err)
// jsonfile.writeFile(file, obj, errorLoggerFunction)

/**
 * 所谓高阶函数就是将一个函数作为参数或者返回一个函数
 */

// const add = (x, y) => x + y
// const subtract = (x, y) => x - y
// const multiply = (x, y) => x * y

// const arrayOfFunctions = [add, subtract, multiply]

// arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1, 1)))

// addWrapper是一个高阶函数，无参数，但是返回一个函数
const addWrapper = () => (x, y) => x + y
// 执行了 addWrapper函数，返回了一个箭头函数，所以add的值是 (x, y) => x + y
const add = addWrapper()
const sum1 = add(1, 2) // 3
const sum2 = addWrapper()(4, 4) // 8

const bankStatement = name => location => balance =>
    `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`

const statementExpectingLocation = bankStatement("Omer")
const statementExpectingBalance = statementExpectingLocation("NYC")
const bankStatementMsg = statementExpectingBalance("100 million")

console.log(bankStatementMsg)

const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion")
console.log(msg)
