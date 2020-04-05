function createElement(type, props, ...children) {
  console.log('createElement', arguments)

  props.children = children

  let vtype

  if (typeof type === 'string') {
    vtype = 1
  }

  if (typeof type === 'function') {
    vtype = type.isReactComponent ? 2 : 3
  }

  return {
    vtype,
    type,
    props
  }
}

export class Component {
  static isReactComponent = {}

  constructor(props) { //绑定props
    this.props = props
    this.state = {}
  }

  setState = () => {

  }
}

export default {
  createElement
}
