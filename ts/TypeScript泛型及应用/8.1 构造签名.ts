// 有时，泛型类可能需要基于传入的泛型 T 来创建其类型相关的对象。比如：

// class FirstClass {
//   id: number | undefined;
// }

// class SecondClass {
//   name: string | undefined;
// }

// class GenericCreator<T> {
//   create(): T {
//     return new T();
//   }
// }

// const creator1 = new GenericCreator<FirstClass>();
// const firstClass: FirstClass = creator1.create();

// const creator2 = new GenericCreator<SecondClass>();
// const secondClass: SecondClass = creator2.create();



// 构造函数签名
interface Point {
  new (x: number, y: number): Point;
}
