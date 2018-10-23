/*
*  拦截整个对象而不是对象的属性
* */

// let obj = {
//   name: 'Eason',
//   age: 30
// }
// let handler = {
//   get (target, key, receiver) {
//     console.log('get', key)
//     return Reflect.get(target, key, receiver)
//   },
//   set (target, key, value, receiver) {
//     console.log('set', key, value)
//     return Reflect.set(target, key, value, receiver)
//   }
// }
// let proxy = new Proxy(obj, handler)
// proxy.name = 'Zoe' // set name Zoe
// proxy.age = 18 // set age 18


let arr = [1,2,3]
let proxy = new Proxy(arr, {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
})
proxy.push(4)
