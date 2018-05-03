/**
 * 使用回调风格出去多个请求，会遇到以下几个问题
 * 1、需要显示进行异步处理
 * 2、为了不让嵌套层次太深，需要一个队request进行处理的函数
 * 3、导出都是回调，影响可读性
 */
function getURLCallback(URL, callback) {
    var req = new XMLHttpRequest()
    req.open('GET', URL, true)
    req.onload = function() {
        if (req.status === 200) {
            callback(null, req.responseText)
        } else {
            callback(new Error(req.statusText), req.response)
        }
    }
    req.onerror = function() {
        callback(new Error(req.statusText))
    }
    req.send()
}
// <1> 对JSON数据进行安全的解析
function jsonParse(callback, error, value) {
    if (error) {
        callback(error, value)
    } else {
        try {
            var result = JSON.parse(value)
            callback(null, result)
        } catch (e) {
            callback(e, value)
        }
    }
}
// <2> 发送XHR请求
var request = {
    comment: function getComment(callback) {
        return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse.bind(null, callback))
    },
    people: function getPeople(callback) {
        return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse.bind(null, callback))
    }
}
// <3> 启动多个XHR请求，当所有请求返回时调用callback
function allRequest(requests, callback, results) {
    //请求为空时，返回error = null, results = []
    if (requests.length === 0) {
        return callback(null, results)
    }
    // 请求数组数组头部出一个请求
    var req = requests.shift()
    req(function(error, value) {
        if (error) {
            callback(error, value)
        } else {
            results.push(value)
            // 第一个请求完成，开始第二个请求，结果集存放在resulites数组中
            allRequest(requests, callback, results)
        }
    })
}
function main(callback) {
    allRequest([request.comment, request.people], callback, [])
}
// 运行的例子
main(function(error, results) {
    if (error) {
        return console.error(error)
    }
    console.log(results)
})
