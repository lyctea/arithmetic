var new2 = function(func) {
    var o = Object.create(func.prototype)
    var k = func.call(o)

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
