// 1: 对同一个promise对象同时调用 `then` 方法
// 这种写法then不会按顺序执行，几乎会同时执行
var aPromise = new Promise(function(resolve) {
    resolve(100)
})
aPromise.then(function(value) {
    return value * 2
})
aPromise.then(function(value) {
    return value * 2
})
aPromise.then(function(value) {
    console.log('1: ' + value) // => 100
})

// 2: 对 `then` 进行 promise chain 方式进行调用
var bPromise = new Promise(function(resolve) {
    resolve(100)
})
bPromise
    .then(function(value) {
        return value * 2
    })
    .then(function(value) {
        return value * 2
    })
    .then(function(value) {
        console.log('2: ' + value) // => 100 * 2 * 2
    })

/**
 * 1、在promise.then中产生的异常不会被外部捕获
 * 2、不能得到then 的返回值，即使又返回值
 */
function badAsyncCall() {
    var promise = Promise.resolve()
    promise.then(function() {
        // 任意处理
        return newVar
    })
    return promise
}
/**
 * 改写后
 */
function anAsyncCall() {
    var promise = Promise.resolve()
    return promise.then(function() {
        // 任意处理
        return newVar
    })
}
