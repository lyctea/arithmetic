/**
 * 幽灵工程----抽象工厂模式
 * 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类的产品实例，
 * 在子类中需要对父类的抽象方法重写，父类可强制子类实现其方法，否则抛出异常
 */

var VehicleFactory = function(subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === "function") {
        // 子类寄生式继承
        function F() {}
        //继承父对象的属性和方法
        F.prototype = new VehicleFactory[superType]()
        //子类的constructor指向自身
        subType.constructor = subType
        // 子类的原型继承自父类
        subType.prototype = new F()
    } else {
        // 不存在抽象类抛出异常
        return new Error("未创建抽象类")
    }

    //小车抽象类
    VehicleFactory.Car = function() {
        this.type = "car"
    }

    VehicleFactory.Car.prototype = {
        getPrice: function() {
            return new Error("抽象方法不能调用")
        },
        getSpeed: function() {
            return new Error("抽象方法不能调用")
        }
    }

    //  公交车抽象类
    VehicleFactory.Bus = function() {
        this.type = "bus"
    }
    VehicleFactory.Bus.prototype = {
        getPrice: function() {
            return new Error("抽象方法不能调用")
        },
        getSpeed: function() {
            return new Error("抽象方法不能调用")
        }
    }

    //  货车抽象类
    VehicleFactory.Truck = function() {
        this.type = "truck"
    }
    VehicleFactory.Truck.prototype = {
        getPrice: function() {
            return new Error("抽象方法不能调用")
        },
        getSpeed: function() {
            return new Error("抽象方法不能调用")
        }
    }
}

/**
 * 实例
 */
//宝马汽车子类
var BMW = function(price, speed) {
    this.price = price
    this.speed = speed
}

// 抽象工厂实现对 Car 抽象类的继承
VehicleFactory(BMW, "Car")
BMW.prototype.getPrice = function() {
    return this.price
}
BMW.prototype.getSpeed = function() {
    return this.speed
}

var bMW = new BMW(100, 200)

console.log(bMW.getPrice())
