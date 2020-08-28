/* 构造函数继承 */
// function Parent() {
//   this.name = 'parent'
// }
//
// function Child() {
//   Parent.call(this)
//   this.type = 'child'
// }
//
// var child = new Child()



/* 借助原型链继承 */
// function Parent() {
//   this.name = 'parent'
// }
//
// function Child() {
//   this.type = 'type'
// }
//
// Child.prototype = new Parent()
// var child = new Child()


/* 组合继承 */
function Parent() {
  this.name = 'name'
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var child = new Child()
