/*
    public：公有，默认 。访问级别：自身、子类、类外。
    protected：受保护。访问级别：自身、子类。
    private：私有 。访问级别：自身
    readonly：只读，只针对成员属性，必须在声明时或者构造函数内初始化。访问级别：自身、子类、类外。
 */
abstract class Component2<T1, T2> {
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

// 定义多个接口，用户类的实现
interface ILog {
  getInfo(): string;
}
interface IStorage {
  save(data: string): void;
}

/**
 * 当一个抽象类中只有抽象的时候，通过接口的方式来定义类，使用implements关键字
 */
class MyComponent2
  extends Component2<IMyComponentProps, IMyComponentState>
  implements ILog, IStorage
{
  // 多个接口
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      val: 1,
    };
  }
  render() {
    this.props.title;
    this.state.val;
    return `<div>组件</div>`;
  }
  getInfo(): string {
    return `组件：MyComponent，props：${this.props}，state：${this.state}`;
  }
  save(data: string) {
    // ... 存储
  }
}
const myComponent2 = new MyComponent2({ title: "标题" });

console.log(myComponent2);
console.log(myComponent2.getInfo());
