/*
* 编译器
* 遍历模板，将里面的插值表达式处理
* 如果发现 k-xx @xx 做特殊处理，处理指令和事件
* */

class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      // 1、$el中的内容搬家到一个fragment，提高操作效率
      this.$fragment = this.node2Fragment(this.$el)

      // 2、编译fragment
      this.compile(this.$fragment)

      // 3、将编译结果追加到宿主中
      this.$el.appendChild(this.$fragment)
    }
  }

  /**
   * 遍历el，把里面的内容创建fragment中
   * @param el
   */
  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    let child
    while ((child = el.firstChild)) {
      fragment.appendChild(child) // child从el中移动到fragment,循环结束，el子元素为空
    }
    return fragment
  }

  /**
   * 编译器，指令和事件处理
   * @param el
   */
  compile(el) {
    // 遍历el
    const childNodes = el.childNodes

    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // console.log('编译元素： ' + node.type)
        // 如果是元素节点，需要处理指令&&事件
        this.compileElement(node)

      } else if (this.isInterpolation(node)) {
        console.log('编译文本： ' + node.textContent)
        this.compileText()
      }

      // 递归子元素
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }


  /**
   * 是否是元素节点
   */
  isElement(node) {
    return node.nodeType === 1
  }

  /**
   * 插值表达式判断
   */
  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileElement(node) {
    // 查看node特效中是否 k-xx，@xx
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(arrt => {
      // 获取属性名称和值,例子 k-text="abc"
      const attrName = attr.name // k-text
      const exp = attr.value  // abc
      if (attrName.indexOf('k-') === 0) {
        const dir = attrName.substring(2)  //text
        //执行指令
        this[dir] && this[dir](node, this.$vm, exp)
      } else if (attrName.indexOf('@') === 0) {
        const eventName = attrName.substring(1)
        this.eventHandler(node, this.$vm, exp, eventName)
      }
    })
  }

  text(node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  /**
   * 双向数据绑定
   */
  model(node, vm, exp) {
    //update数据驱动界面更新
    this.update(node, vm, exp, 'model')
    //监听input事件，改变数值
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }

  modelUpdator(node, value) {
    node.value = value
  }

  html(node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }

  htmlUpdator(node, value) {
    node.innerHTML = value
  }

  eventHandler(node, vm, exp, eventName) {
    //获取回调函数
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventName && fn) {
      node.addEventListener(eventName, fn.bind(vm))
    }
  }

  /**
   * 把插值表达式替换为实际内容
   */
  compileText(node) {
    // RegExp.$1 匹配第一个分组内容
    const exp = RegExp.$1
    this.update(node, vm, exp, 'txt')
  }

  /**
   * 编写update函数，可复用
   * @param node  等待更新的节点
   * @param vm    vue实例
   * @param exp   {{exp}}
   * @param dir   具体操作：text|html|model
   */
  update(node, vm, exp, dir) {
    const fn = this[dir + 'Updator']
    fn && fn(node, vm[exp])
    // 创建Watcher
    new Watcher(vm, exp, function () {
      fn && fn(node, vm[exp])
    })
  }

  textUpdator(node, value) {
    node.textContent = value

  }
}
