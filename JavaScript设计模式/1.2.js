/**
 * 尝试定义一个可以为函数添加多个方法的 addMethod 方法
 */

Function.prototype.addMethod = function(name, fn) {
    this.prototype[name] = fn
    return this
}

Function.prototype.addMethods = function(fns) {
    for (var key in fns) {
        if (typeof fns[key] === "function") {
            this.prototype[key] = fns[key]
        }
    }
}

var Methods = function() {}

// Methods.addMethod("checkName", function() {
//     console.log("checkName")
//     return this
// }).addMethod("checkEmail", function() {
//     console.log("checkEmail")
//     return this
// })

Methods.addMethods({
    checkName: function() {
        console.log("checkName")
        return this
    },
    checkEmail: function() {
        console.log("checkEmail")
        return this
    }
})

var m = new Methods()
m.checkName().checkEmail()
