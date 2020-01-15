/**
 * 科里化函数
 * @param fn
 * @return {function(): *}
 */
function curry(fn) {
  // 缓存 slice 方法
  var Slice = [].slice()
  //  从第二个参数开始截取参数
  var args = Slice.call(arguments, 1)
  // 闭包返回新的函数
  return function () {
    var addArgs = Slice.call(arguments),
      allArgs = args.concat(addArgs)

    return fn.apply(null, allArgs)
  }
}
