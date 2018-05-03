/**
 * Promise.resolve 方法的另一个作用就是将 Thenable 对象转换为 promise 对象
 * Thenable简单说就是一个非常类似 promise 的东西，具有 .then 方法，
 * 会巧妙的利用Thenable对象原来具有的 then 方法
 */

var promise = Promise.resolve($.ajax('/json/comment.json'))
promise.then(function(value) {
    console.log(value)
})
