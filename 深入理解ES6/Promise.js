/**
 * JS 引擎建立在单线程事件循环的概念上。单线程( Single-threaded )意味着同一时刻只能 执行一段代码，
 * 与 Java 或 C++ 这种允许同时执行多段不同代码的多线程语言形成了反差。 多段代码可以同时访问或修改状态，
 * 维护并保护这些状态就变成了难题，这也是基于多线程 的软件中出现 bug 的常见根源之一。
 */

/**
  * 每个 Promise 都会经历一个短暂的生命周期，初始为挂起态( pending state)，这表示异步 操作尚未结束。一个挂起的 Promise 也被认为是未决的( unsettled )。上个例子中的 Promise 在 readFile() 函数返回它的时候就是处在挂起态。一旦异步操作结束， Promise 就会被认为是已决的( settled )，并进入两种可能状态之一:
    1. 已完成(fulfilled):Promise的异步操作已成功结束;
    2. 已拒绝(rejected):Promise的异步操作未成功结束，可能是一个错误，或由其他原
    因导致。
  * 
  */

// Node.js 范例
/**   
let fs = require("fs")
function readFile(filename) {
    return new Promise(function(resolve, reject) {
        // 触发异步操作
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            // 检查错误
            if (err) {
                reject(err)
                return
            }
            // 读取成功
            resolve(contents)
        })
    })
}
let promise = readFile("example.txt")
// 同时监听完成与拒绝
promise.then(
    function(contents) {
        // 完成
        console.log(contents)
    },
    function(err) {
        // 拒绝
        console.error(err.message)
    }
)
 */

let fs = require("fs")
function run(taskDef) {
    // 创建迭代器
    let task = taskDef() // 启动任务
    let result = task.next() // 递归使用函数来进行迭代
    ;(function step() {
        // 如果还有更多要做的
        if (!result.done) {
            // 决议一个 Promise ，让任务处理变简单
            let promise = Promise.resolve(result.value)
            promise
                .then(function(value) {
                    result = task.next(value)
                    step()
                })
                .catch(function(error) {
                    result = task.throw(error)
                    step()
                })
        }
    })()
}
// 定义一个函数来配合任务运行器使用
function readFile(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, contents) {
            if (err) {
                reject(err)
            } else {
                resolve(contents)
            }
        })
    })
}
// 运行一个任务
run(function*() {
    let contents = yield readFile("./config.json")
    doSomethingWith(contents)
    console.log("Done")
})
