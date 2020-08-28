import Observer from './observer'
import Compiler from "./compiler"

class Vue {
  constructor(options) {
    // 获取dom对象
    this.$el = document.querySelector(options.el)
    // 转存数据
    this.$data = options.data || {}

    // 数据和函数代理到vm实例
    this._proxyData(this.$data)
    this._proxyMethods(this.$data.methods)

    // 数据劫持
    new Observer(this.$data)
    // 模板编译
    new Compiler(this)
  }

  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        set(newValue) {
          data[key] = newValue
        },
        get() {
          return data[key]
        }
      })
    })
  }

  _proxyMethods(methods) {
    if (methods && typeof methods === 'object') {
      Object.keys(methods).forEach(key => {
        this[key] = methods[key]
      })
    }
  }
}

window.Vue = Vue
