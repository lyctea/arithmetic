function render(vnode, container) {
  console.log('render', vnode)
  // vnode  -> node
  mount(vnode, container)
  container.appendChild(node)
}


/**
 * 将虚拟 DOM 生成为真实 DOM
 * @param vnode 虚拟DOM
 */
function mount(vnode) {
  const {vtype} = vnode //节点类型

  if (!vtype) {
    mountTextNode(vnode, container) // 处理文本节点
  }

  if (vtype === 1) {
    mountHtml(vnode, container) // 处理原生标签
  }

  if (vtype === 3) {
    mountFunc(vnode, container)
  }

  if (vtype === 4) {
    mountClass(vnode, container)
  }

  return node

}

/**
 * 处理文本节点
 */
function mountTextNode(vnode, container) {
  const node = document.createTextNode(vnode) //原生的文本节点
  container.appendChild(node)
}

/**
 * 处理原生标签
 */
function mountHtml(vnode, container) {
  const {type, props} = vnode // type原生标签值
  const node = document.createElement(type)

  const {children, ...rest} = props
  children.map(item => {  //递归 child
    if (Array.isArray(item)) {
      item.map(c => { // 如果child是数组的情况，拆开
        mount(c, node)
      })
    } else {
      mount(item, node)
    }
  })

  Object.keys(rest).map(item => {
    if (item === 'className') {
      node.setAttribute('class', rest[item])
    }

    if (item.slice(0, 2) === 'on') { //如果属性是以on开头，判断为事件
      node.addEventListener('click', rest[item])
    }
  })

  container.appendChild(node)
}


/**
 * 处理函数组件，函数组件return
 */
function mountFunc(vnode, container) {
  const {type, props} = vnode
  const node = type(props)

  mount(node, container)
}

/**
 * 处理 class 组件
 * @param vnode
 * @param container
 */
function mountClass(vnode, container) {
  const {type, props} = vnode
  const cmp = new type(props) //new 一个实例
  const node = cmp.render()  //执行实例的render函数，得到虚拟DOM

  mount(node, container)
}

export default {
  render
}
