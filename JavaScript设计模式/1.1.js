/**
 * 实现方法的链式调用
 * 在方法中返回this，实现链式调用
 */

var CheckObject = function() {
    return {
        checkName: function() {
            console.log("checkName")
            return this
        },
        checkEmail: function() {
            console.log("checkEmail")
            return this
        },
        checkPassword: function() {
            console.log("checkPassword")
            return this
        }
    }
}

var a = CheckObject()
a
    .checkName()
    .checkName()
    .checkPassword()
