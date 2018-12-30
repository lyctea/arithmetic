// Mixin优先考虑的是组合而不是继承

/**
 * 函数式继承：
 * 使用函数式继承是来增加对象特性方式是，将一个增强函数直接应用到实例上，函数能通过闭包来实现
 * 数据私有，增强函数使用动态对象扩展来为对象增加新的属性或者方法
 */
function base (spec) {
  var that = {};
  that.name = spec.name;
  return that;
}

function child (spec) {
  var that = base(spec);
  that.sayH = function () {
    return 'xxx: ' + that.name;
  };
  
  return that;
}

var result = child({name: 'a functional object'});

console.log(result.sayH());


