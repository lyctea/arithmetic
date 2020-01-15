/**
 * 函数绑定
 * @param fn 需要绑定上下文的函数
 * @param context 上下文
 * @return {function(): *}
 */
function bind(fn, context) {
  return function () {
    return fn.apply(context, arguments)
  }
}

