/*
* 在属性描述符诞生之前，对象应该是可以被随意添加、更改、删除的，那么扩展一个对象就十分必要了，下面是简单的实现
* */

/**
 * 对象继承
 * @param destination 目标对象
 * @param source 源对象
 * @returns {*} 返回目标对象
 */
function extend (destination, source) {
  // for in 不能遍历原型上的方法
  for (var property in source)
    destination[property] = source[property];
  return destination;
}
