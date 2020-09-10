class Event {
  constructor() {
  }

  //事件容器，用于装事件数组
  handlers = {}

  //事件添加方法，参数有事件名和事件方法
  addEventListener(type, handler) {
    if (!(type in this.handlers)) {
      this.handlers[type] = []
    }
    this.handlers[type].push(handler)
  }

  //触发事件
  dispatchEvent(type, ...params) {
    //如果没有注册事件就抛出异常
    if (!(type in this.handlers)) {
      return new Error('未注册该事件')
    }
    // 遍历触发事件
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  //移除事件
  removeEventListenner(type, handler) {
    if (!(type in this.handlers)) {
      return new Error('无效事件')
    }
    if (!handler) {
      delete this.handlers[type]
    } else {
      const idx = this.handlers[type].findIndex(ele => ele === handler)
      if (idx === -1) {
        return new Error('无该绑定事件')
      }
      this.handlers[type].splice(idx, 1)
      if (this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }
}


var event = new Event()

function load(params) {
  console.log('load', params)
}

event.addEventListener('load', load)

function load2(params) {
  console.log('load2', params)
}

event.addEventListener('load', load2)
event.dispatchEvent('load', 'load事件触发')
event.removeEventListenner('load', load2)
event.removeEventListenner('load')
