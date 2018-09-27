/*
*
*
* */

var class2type = {}

"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(' ').map(function (item, index) {
  class2type["[object " + item + "]"] = item.toLowerCase()
})


function type (obj) {
  //兼容 IE6
  if(obj === null) {
    return obj + ''
  }
  
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj
}

// 对常用的类型判断进行封装
function isFunction(obj) {
  return type(obj) === "function";
}

console.log(type([]))