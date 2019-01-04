/**
 * 容器：容器必须装在任意类型的值，一个存放数据的特殊盒子
 */
var Container = function (x) {
  this.__value = x;
};

Container.of = function (x) {
  return new Container(x);
};

console.log(Container.of(3))
console.log(Container.of("hotdogs"))
console.log(Container.of(Container.of({name: "yoda"})))


Container.prototype.map = function(f){
  return Container.of(f(this.__value))
}
