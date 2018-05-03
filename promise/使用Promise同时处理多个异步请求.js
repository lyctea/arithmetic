/**
 * 相比于使用回调的方法，promise
 * 1、可以直接使用JSON.parse函数
 * 2、函数main()返回promise对象
 * 3、错误处理的地方直接返回promise对象进行处理
 *
 *
 * @param {any} URL
 * @returns
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
    // 记录结果的方法
    function recordValue(results, value) {
        results.push(value)
        return results
    }
    // [] 用来保存初始化的值
    var pushValue = recordValue.bind(null, [])
    return request
        .comment()
        .then(pushValue)
        .then(request.people)
        .then(pushValue)
}
// 运行的例子
main()
    .then(function(value) {
        console.log(value)
    })
    .catch(function(error) {
        console.error(error)
    })
