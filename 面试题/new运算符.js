var new2 = function(func) {
    var o = Object.create(func.prototype) // 创建对象并进行原型链接
    var k = func.call(o)  // 绑定this上下文

    if (typeof k === "object") {
        return k
    } else {
        return o
    }
}

var M = function() {
    this.name = "M"
}

var m = new2(M)

console.log(m.__proto__.constructor === M)
