/**
 * promise有三种状态，resovle、rejected、pending， 当状态改变只有，promise对象的状态
 * 就不会有任何变化
 */

function asyncFunction() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error('error'))
        }, 1000)
        setTimeout(function() {
            resolve('Hello World!')
        }, 1000)
    })
}

asyncFunction()
    .then(function(value) {
        console.log(value)
    })
    .catch(function(err) {
        console.log(err)
    })
