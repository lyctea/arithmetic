function Router() {
  this.routers = {}
  this.currentUrl = ''
}

/**
 * 创建路由集、添加路由的key以及对应的回调
 * @param path  路由
 * @param callback 回调
 */
Router.prototype.add = function (path, callback) {
  this.routers[path] = callback || function () {
  }
}

/**
 * 解析当前路由key，根据key从路由中找到并调用对应的处理函数
 * @param
 * @param
 */
Router.prototype.refresh = function () {
  this.currentUrl = location.hash.replace(/^#*/, '')
  this.routers[this.currentUrl]()
}


/**
 * 初始化监听事件
 */
Router.prototype.load = function () {
  window.addEventListener('load', this.refresh.bind(this), false)
  window.addEventListener('hashchange', this.refresh.bind(this), false)
}

/**
 * 跳转到对应的路由
 * @param path
 */
Router.prototype.navigate = function (path) {
  path = path ? path : ''
  location.href = location.href.replace(/#(.*)$/, '') + '#' + path
}


window.Router = new Router()
window.Router.load()
