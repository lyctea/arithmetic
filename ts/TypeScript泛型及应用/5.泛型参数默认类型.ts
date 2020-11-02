/**
 * 泛型参数默认类型
 */
interface A<T = string> {
  name: T;
}

const strA: A = { name: "SS" }; // 有默认类型的类型参数被认为是可选的。
const numB: A<number> = { name: 1 };
