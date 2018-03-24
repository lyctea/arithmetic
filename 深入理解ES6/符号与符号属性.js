/**
 * 基本类型：字符串、数值、布尔类型、null、undefined、Symbol
 * 
 *  符号起初被设计用于创建对象私有成员
 * 
 */

 let firstName = Symbol('test name')  //符号描述信息，只能用于console
 let person = {}

 person[firstName] = 'lyctea'

//  console.log(person[firstName])
//  console.log(firstName)
//  console.log(typeof(firstName))

let uid = Symbol.for("uid");
let object = {
    [uid]: "12345"
};
// console.log(object[uid]);
// console.log(uid);
// let uid2 = Symbol.for("uid");
// console.log(uid === uid2);
// console.log(object[uid2]);
// console.log(uid2);
// "12345"
// "Symbol(uid)"
// true
// "12345"
// "Symbol(uid)"

let uid1 = Symbol.for("uid"),
    desc = String(uid1);
console.log(desc);              