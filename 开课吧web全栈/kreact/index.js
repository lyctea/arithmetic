import ReactDOM from './ReactDOM'
import React from './kreact'


class ClassCmp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  handle = () => {
    console.log('omg')
  }

  render() {
    return <div className="border">
      name: {this.props.name}
      <p>counter: {this.state.counter}</p>
      <button onClick={this.handle}></button>
    </div>
  }
}


function FuncCmp(props) {
  return <div className="border">name: {props.name}</div>
}

let jsx = (
  <div>
    <div className="border">我是内容</div>
    <FuncCmp name="我是function组件"></FuncCmp>
    <ClassCmp name="我是Class组件"></ClassCmp>
  </div>
)


ReactDOM.render(jsx, document.getElementById('root'))
