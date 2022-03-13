/*
 * @Author: Jupiter
 * @Date: 2022-03-14 00:08:57
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-14 00:25:02
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/组合寄生继承.js
 */
function initExtend(sub, sup) {
    //静态属性继承
    var extendStatics = function (sub, sup) {
        for (var property in sup) {
            // 将父类静态属性浅拷贝给子类
            if (sup.hasOwnProperty(property)) {
                sub[property] = sup[property]
            }
        }
    }

    extendStatics(sub, sup)
    function subFun() {
        this.constructor = sub;
    }
    subFun.prototype = sup.prototype //继承父类的prototype
    sub.prototype = new subFun(); //子类原型指向subFun实例
}

// 父类
function Animal() {
    this.hand = 2
}
Animal.cell = '多细胞'
Animal.prototype.eat = function () {
    console.log('Animat eat');
}

//子类
function Monkey() {
    Animal.apply(this, arguments)
    this.foot = 2
}
// 1.子类继承父类的属性和方法
initExtend(Monkey, Animal)
// 2.添加子类自己的方法
Monkey.prototype.go = function () {
    console.log('Mokey go');
}

const m = new Monkey()
m.eat()
