import Dep from './dep'

var $uid = 0

export default class Watcher {
  constructor(exp, scope, cb) {
    this.exp = exp
    this.scope = scope
    this.cb = cb
    this.uid = $uid++
  }

  get() {
    Dep.target = this
    let newValue = Watcher.computedExpression(this.exp, this.scope)
    Dep.target = null
    return newValue
  }


  /**
   * 完成回调函数的调用
   */
  update() {
    let newValue = this.get()
    this.cb && this.cb(newValue)
  }

  static computedExpression(exp, scope) {
    let fn = new Function('scope', "with(scope){return " + exp +  "}")
    return fn(scope)
  }
}
