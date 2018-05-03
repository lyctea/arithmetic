/**
 * then 方法最终都会返回一个Promise对象
 *
 * catch 在ie8以下版本属于保留字，promise.catch 转换为 promise["catch"]
 */
function doubleUp(value) {
    return value * 2
}
function increment(value) {
    return value + 1
}

function output(value) {
    console.log(value)
}

var promise = Promise.resolve(1)

promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error) {
        console.error(error)
    })
