class KStore {
  constructor(options) {
    this.state = options.state
    this.mutations = options.mutations
    this.actions = options.actions

    this.vm = new Vue({
      data: {
        state: this.state  //响应式监听state 对象
      }
    })

    options.getters && this.handleGetters(options.getters)
  }

  /**
   * commit 通过调用mustation方法，修改state状态
   */
  commit(type, payload) {
    const mustation = this.mutations[type]
    mustation(this.state, payload)
  }

  dispatch(type, payload) {
    const action = this.actions[type]

    const ctx = {  //构造上下文
      commit: this.commit,
      state: this.state,
      dispatch: this.dispatch
    }

    return action(ctx, payload)
  }

  handleGetters(getters) {
    this.getters = {}
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key]
        }
      })
    })
  }

}

export default {}
