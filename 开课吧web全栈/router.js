/**
 * Vue Router 代码原理
 *
 */
class VueRouter {
  constructor(vue, options) {  //构造函数
    this.$options = options  //保存路由配置
    this.routerMap = {}  //保存路由映射表
    this.app = new Vue({  //利用Vue响应式原理，监听data变化
      data: {
        current: '#/'
      }
    })

    this.init()  // 路由初始化
    this.createRouteMap(this.$options) // 路由映射为组件
    this.initComponent(Vue) // 初始化组件，router-link\router-view
  }

  /**
   * 监听页面路由变化
   */
  init() {
    // 参数设置为true就在捕获过程中执行，反之就在冒泡过程中执行处理函数。
    window.addEventListener('load', this.onHashChange.bind(this), false)
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)
  }

  /**
   * 路由表映射为组建
   * @param options
   */
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routerMap[item.path] = item.component
    })
  }

  /**
   * 初始化组件
   */
  initComponent(Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render: function (h) { // h 为createElement的方法， 这里只能用render方法
        return h(
          'a', //标签名
          {attrs: {href: this.to}}, //dom原生属性
          this.$slots.default // 标签的内容
        )
      }
    })

    const _this = this //保存this的指向为Router
    Vue.component('router-view', {  //响应式坚挺了current，会导师router-view组件的重新渲染，以下代码会被执行
      return(h) {
        var component = _this.routerMap[_this.app.current] // 根据之前映射的路由，取出组件
        return h(component) // 组件重新渲染
      }
    })
  }

  getHash() {
    return window.location.hash.slice(1) || '/'
  }

  onHashChange() {
    this.app.current = this.getHash()
  }

}

/**
 * vue挂在插件会执行插件的install方法
 * @param VUe
 */
VueRouter.install = function (VUe) {
  Vue.mix({
    beforeCreate() {
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
  })
}


Vue.ues(VueRouter)
