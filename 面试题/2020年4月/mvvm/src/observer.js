import Dep from './dep'

export default class Observer {
  constructor(data) {
    this.data = data
    // 遍历对象完成所有数据的劫持

    this.walk(this.data)
  }

  walk(data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(data, key, value) {
    let dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true, // 可遍历
      configurable: false, //不可再配置
      get: () => {
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set: newValue => {
        value = newValue
        dep.notify()
      },
    })

    //递归设置响应式
    this.walk(value)
  }

}
