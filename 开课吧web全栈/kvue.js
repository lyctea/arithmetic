class Kvue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.observe(this.$data)
  }

  /**
   * 递归遍历，使data对象响应化
   */
  observe(value) {
    if (!value || typeof value !== 'object') {
      return
    }

    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])
      this.proxyData(key)
    })

  }

  /**
   * 数据代理 Vue.xxx
   */
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }

  /**
   * 对象属性劫持
   * @param obj  对象
   * @param key  key
   * @param val  值
   */
  defineReactive(obj, key, val) {
    this.observe(val)

    //创建Dep实例，Dep 和 Key 一一对应
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      get() {
        //将 Dep.target 指向的 Watcher实例加入到Dep中
        Dep.target && dep.addDep(Dep.target)
        return value
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          dep.notify()
        }
      }
    })
  }
}


/**
 * Dep 管理若干 Watcher 实例，它和Key 一一对应
 */
class Dep {
  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watcher => watcher.update())
  }

}

/**
 * 保存UI中以来，通过update函数可以更新
 */
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    //将当前实例指向Dep.target
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }

  update() {
    // console.log(`${this.key}属性更新`)
    this.cb.call(this.vm, this.vm[this.key])
  }
}


