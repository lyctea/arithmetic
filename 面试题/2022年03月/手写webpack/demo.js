/**
 * title: 模拟export、require
 */


/**
 * 模拟exports
 */
var add = require('add.js').default
console.log(add(1, 2))

var exprots = {} // exports 本质是个对象
eval("exports.default = function(a,b){return a + b}") // node文件读取后的代码字符串，定义default为add方法
var add = require("add.js").default
console.log(add(1, 2))

// 进一步封装 ⬇⬇⬇⬇
var exprots = {}
(function (exports, code) {
    eval(code)
})(exports, "exports.default = function(a,b){return a + b}")


/**
 * 模拟require, require 根据提供的file加载对应的模块
 */

// require文件名
var add = require("add.js").default
console.log(add(1, 2))

function require(file) {
    var exprots = {}
    (function (exports, code) {
        eval(code);
    })(exports, "exports.default = function(a,b){return a + b}")
    return exprots
}


// 进一步封装 ⬇⬇⬇⬇, 将模块的文件名和字符串整理为一张key-val 表，可以根据传入的文件名加载不同的模块
(function (list) {
    function require(file) {
        var exprot = {}
        (function (exports, code) {
            eval(codee)
        })(exports, list[file])
    }

    require('index.js')
})({
        "index.js": `var add = require('add.js').default
            console.log(add(1,2))
        `,
        "add.js": `exports.default = function(a,b){return a + b}`
    }
)
