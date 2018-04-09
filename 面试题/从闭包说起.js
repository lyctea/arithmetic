/**
 *
 */
// for (var i = 0; i < 5; i++) {
//     // 几乎同时注册了5个定时器，都是1秒之后被触发，所以几乎是在5秒后同时打印
//     setTimeout(function() {
//         console.log(new Date(), i)
//     }, 1000)

// }

// // 首先被打印的
// console.log(new Date(), i)

// ====================================================================================

// for (var i = 0; i < 5; i++) {
//     // 利用IIFE 声明即执行函数表达式
//     ;(function(j) {
//         setTimeout(function() {
//             console.log(new Date(), j)
//         }, 1000)
//     })(i)
// }

// console.log(new Date(), i)

// ====================================================================================
// 利用了 JS 中的基本类型的参数传递是按值传递的，就是是产生一个副本
//  也可以使用es6 中 let来产生局部作用域
// var output = function(i) {
//     setTimeout(function() {
//         console.log(new Date(), i)
//     }, 1000)
// }
// for (var i = 0; i < 5; i++) {
//     output(i) // 这里传过去的 i 值被复制了
// }
// console.log(new Date(), i)

// ====================================================================================
// 实现每个一秒打印，即 0、1、2、3、4、5
// for (var i = 0; i < 5; i++) {
//     ;(function(j) {
//         setTimeout(function() {
//             console.log(new Date(), j)
//         }, 1000 * j) // 这里修改 0~4 的定时器时间
//     })(i)
// }

// setTimeout(function() {
//     // 这里增加定时器，超时设置为 5 秒 , 因为i是用var关键字定义的，此时i是全局变量，值为5
//     console.log(new Date(), i)
// }, 1000 * i)

// ====================================================================================
// const tasks = []
// for (var i = 0; i < 5; i++) {
//     // 这里 i 的声明不能改成 let，如果要改该怎么做？
//     ;(j => {
//         tasks.push(
//             new Promise(resolve => {
//                 setTimeout(() => {
//                     console.log(new Date(), j)
//                     resolve() // 这里一定要 resolve，否则代码不会按预期 work
//                 }, 1000 * j) // 定时器的超时时间逐步增加
//             })
//         )
//     })(i)
// }

// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date(), i)
//     }, 1000) // 注意这里只需要把超时设置为 1 秒
// })

// ====================================================================================

// const tasks = [] // 这里存放异步操作的 Promise

// const output = i =>
//     new Promise(resolve => {
//         setTimeout(() => {
//             console.log(new Date(), i)
//             resolve()
//         }, 1000 * i)
//     }) // 生成全部的异步操作

// for (var i = 0; i < 5; i++) {
//     tasks.push(output(i))
// } // 异步操作完成之后，输出最后的 i

// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date(), i)
//     }, 1000)
// })
// ====================================================================================

// 模拟其他语言中的 sleep，实际上可以是任何异步操作
// 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。
const sleep = timeountMS =>
    new Promise(resolve => {
        setTimeout(resolve, timeountMS)
    })
;(async () => {
    // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        await sleep(1000)
        console.log(new Date(), i)
    }

    await sleep(1000)
    console.log(new Date(), i)
})()
