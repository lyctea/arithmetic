import watcher from "./watcher"

export default class Compiler {
  constructor(context) {
    this.$el = context.$el // 操作的元素节点
    this.context = context

    if (this.$el) {
      // dom转为文档片段
      this.$fragment = this.nodeToFragment(this.$el)
      // 编译模板
      this.compiler(this.$fragment)
      // 把文档片段添加到页面中
      this.$el.appendChild(this.$fragment)
    }
  }

  nodeToFragment(node) {
    let fragment = document.createDocumentFragment()
    if (node.childNodes && node.childNodes.length) {
      node.childNodes.forEach(child => {
        if (!this.ignore(child)) {
          fragment.appendChild(child)
        }
      })
    }
    return fragment
  }

  ignore(node) {
    var reg = /^[\t\n\r]+/
    return (
      node.nodeType === 8 || (node.nodeType === 3 && reg.test(node.textContent))
    )
  }

  /**
   * 模板编译
   * @param node  this.$el
   */
  compiler(node) {
    if(node.childNodes && node.childNodes.length) {
      node.childNodes.forEach(child => {
        if(child.nodeType === 1) {
          this.compilerElementNode(child)
        }else if(child.nodeType === 3) {
          this.compilerTextNode(child)
        }
      })
    }
  }

  /**
   * 编译元素节点
   * @param node
   */
  compilerElementNode(node) {
    //TODO 完成元素节点编译， 包括指令等
    this.compiler(node)
  }

  /**
   * 编译文本节点
   * @param node
   */
  compilerTextNode(node) {
    let text = node.textContent.trim()
    if (text) {
      let exp = this.parseTextExp(text)

      new watcher(exp, this.context, newValue => {
        node.textContent = newValue
      })
    }
  }

  parseTextExp(text) {
    let regText = /\{\{(.+?)\}\}/g
    let pices = text.split(regText)
    let matches = text.match(regText)
    let tokens = []
    pices.forEach(item => {
      if (matches && matches.indexOf('{{' + item + '}}') > -1) {
        tokens.push('(' + item + ')')
      } else {
        tokens.push('`' + item + '`')
      }
    })
    return tokens.join('+')
  }
}
