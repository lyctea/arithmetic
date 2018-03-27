/**
 * 定义一个既可以为原型添加方法又可以为自身添加方法的 addMethod 方法
 */
Function.prototype.addMethods = function(fns) {
    for (var key in fns) {
        if (typeof fns[key] === "function") {
            this.prototype[key] = fns[key]
            this[key] = fns[key]
        }
    }
}

var Methods = function() {}

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
Methods.checkName().checkEmail()
