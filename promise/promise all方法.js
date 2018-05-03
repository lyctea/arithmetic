/**
 * Promise.all接受一个promise对象的数组作为参数，当这个
 * 数组里所有的promise对象全部变成resolve或reject状态的时候，
 * 它才会去调用.then()方法
 *
 * 1、main中的处理流程非常清晰
 * 2、Promise.all 接收promise对象组成的数组作为参数
 */

function getURL(URL) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest()
        req.open('GET', URL, true)
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.responseText)
            } else {
                reject(new Error(req.statusText))
            }
        }
        req.onerror = function() {
            reject(new Error(req.statusText))
        }
        req.send()
    })
}
var request = {
    comment: function getComment() {
        return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
    },
    people: function getPeople() {
        return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse)
    }
}
function main() {
    return Promise.all([request.comment(), request.people()])
}
// 运行示例
main()
    .then(function(value) {
        console.log(value)
    })
    .catch(function(error) {
        console.log(error)
    })
