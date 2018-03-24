/**
 * 迭代器是被设计专用于迭代的对象，带有特定接口。
 * 所有的迭代器对象都拥有 next() 方 法，会返回一个结果对象。
 *
 * 生成器( generator )是能返回一个迭代器的函数。
 * 生成器函数由放在 function 关键字之 后的一个星号( * )来表示，
 * 并能使用新的 yield 关键字。
 */

// function *createIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// // 生成器能像正规函数那样被调用，但会返回一个迭代器
//  let iterator = createIterator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// 1 // 2 // 3

// let values = [1, 2, 3, {}, null, undefined]
// let iterator = values[Symbol.iterator]()

// for (const value of values) {
//     // console.log(value)
// }

// // console.log(iterator.next())

// let colors = ["red", "green", "blue"]
// let tracking = new Set([1234, 5678, 9012])
// let data = new Map()
// data.set("title", "Understanding ES6")
// data.set("format", "ebook")
// for (let entry of colors.entries()) {
//     // console.log(entry)
// }
// for (let entry of tracking.entries()) {
//     // console.log(entry)
// }
// for (let entry of data.entries()) {
//     console.log(entry)
// }

let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012])
let data = new Map()
data.set("title", "Understanding ES6")
data.set("format", "ebook")

// for (let value of colors.values()) {
//     console.log(value)
// }
// for (let value of tracking.values()) {
//     console.log(value)
// }
for (let value of data.values()) {
    console.log(value)
}
