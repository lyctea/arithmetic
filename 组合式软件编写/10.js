/*
* es6便捷class语法，需要使用new关键字
*
* 创建一个新对象，并且将构造函数中的this绑定到该对象
* 如果没有显示地在构造函数中返回其他对象性，那么构造函数将隐式地返回this
* 将对象的 [[Prototype]] （一个内部引用） 属性设置为 Constructor.prototype，从而有 Object.getPrototypeOf(instance) === Constructor.prototype。
* 声明构造函数引用，令 instance.constructor === Constructor。
* */

class User {
  constructor ({userName, avatar}) {
    this.userName = userName,
    this.avatar = avatar
  }
}

const currentUser = new User({
  userName: 'Foo',
  avatar: 'foo.png'
})

User.prototype = {}

console.log(
  currentUser instanceof User,
)
