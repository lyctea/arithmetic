/**
 * 希望限制每个类型变量接受的类型数量，这就是泛型约束的作用。
 */
interface Length {
  length: number;
}

function identit2<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function identit3<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function identity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

identity([1, 2, 3]);
