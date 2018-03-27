/**
 * 解决2.4中组合继承问题： 在使用构造函数继承时执行了一遍父类的够赞方法，而在实例化子类的时候又执行了一遍父类的方法
 *
 * 《JavaScript中原型式继承》：借助原型 prototype 已有的对象创建一个新的对象，同时不必创建新的自定义对象类型
 */

/**
 * 寄生组合继承
 */

/**
 * 上面的函数得到的对象F，拥有了对象o的全部属性（在原型链上），而修改F的属性，不会影响到o，相当于把o复制了一份。
 * F 对象拥有父对象的所有方法（在原型链上）
 */
function inheritObject(o) {
    //生命一个过渡函数对象
    function F() {}
    //过渡对象的原型式父对象
    F.prototype = o
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F()
}

function inheritPrototype(subClass, superClass) {
    // 复制一份父类的原型副本保存在变量中， 复制了父类原型的所有属性和方法
    var p = inheritObject(SuperClass.prototype)
    //修正因为重写子类原型导致子类的 constructor 属性被修改
    p.constructor = subClass
    //设置子类原型
    subClass.prototype = p
}

// 定义父类
function SuperClass(name) {
    this.name = name
    this.colors = ["red", "black"]
}

//定义父类原型方法
SuperClass.prototype.getName = function() {
    console.log(this.name)
}

// 定义子类
function SubClass(name, time) {
    //构造函数式继承
    SuperClass.call(this, name)
    //子类新增属性
    this.time = time
}

//寄生式继承父类原型
inheritPrototype(SubClass, SuperClass)
//子类新增原型方法
SubClass.prototype.getTime = function() {
    console.log(this.name)
}

// 创建两个测试方法
var instance1 = new SubClass("js book", 2014)
var instance2 = new SubClass("css book", 2013)
