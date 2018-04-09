var Car = function() {}

/**
 * 子类需要重写的方法
 * 当子类没有重写方法是，变回调用父类的方法，从而抛出异常
 */
Car.prototype = {
    getPrice: function() {
        console.log("抽象方法不能调用")
        return new Error("抽象方法不能调用")
    }
}

// var car = new Car()
console.log(Car.prototype.getPrice())
