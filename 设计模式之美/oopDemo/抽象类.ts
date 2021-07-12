/**
 * 一个基类（父类）的一些方法无法确定具体的行为，而是由继承的子类去实现
 * abstract 修饰的方法不能有方法体
 * 如果一个类有抽象方法，那么该类也必须为抽象的
 * 如果一个类是抽象的，那么就不能使用 new 进行实例化
 * 如果一个子类继承了一个抽象类，那么该子类就必须实现抽象类中的所有抽象方法
 */
abstract class Component<T1, T2> {
  public state: T2;
  constructor(public props: T1) {}
  public abstract render(): string;
}

interface IMyComponentProps {
  title: string;
}
interface IMyComponentState {
  val: number;
}
class MyComponent extends Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      val: 1,
    };
  }
  render() {
    this.props.title;
    this.state.val;

    console.log(this.props.title);

    return `<div>组件</div>`;
  }
}

let MyComponent1 = new MyComponent({ title: "标题" });

console.log(MyComponent1);
// MyComponent { props: { title: '标题' }, state: { val: 1 } }

MyComponent1.render();
// 标题
