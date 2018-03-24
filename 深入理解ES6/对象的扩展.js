/**
 * 对ES5方法的简写，省略function关键字和冒号
 */

var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

/**
 * Object.assign() 混入Mixin是在JS中组合对象时最流行的模式，
 * 在一次混入中，一个对象会从另一个对象中接收属性与方法
 */
function EventTarget() {  }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function(e) { console.log(e);},
    on: function() {  }
}
var myObject = {}
Object.assign(myObject, EventTarget.prototype);
myObject.emit("somethingChanged");

console.log(myObject)



/*
 * 修改对象的原型,将原型设置为 dog
*/
Object.setPrototypeOf(friend, dog);

/** 
 * super是指向对象的原型的一个指针，实际就是object.getPrototypeOf(this),
 * 但需要注意的是，只能在对象的简写方法内，具名方法不可用
 */
let friend = {
    getGreeting() {
        // 相当于 Object.getPrototypeOf(this).getGreeting.call(this)
        return super.getGreeting() + ', Hi!'
    }
}





