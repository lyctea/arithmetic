/**
 * 范型接口
 * 解决：返回多种类型
 */
interface Identities<V, M> {
  value: V;
  message: M;
}

function identity<T, U>(value: T, message: U): Identities<T, U> {
  console.log(value + ": " + typeof value);
  console.log(message + ": " + typeof message);
  let identities: Identities<T, U> = {
    value,
    message,
  };
  return identities;
}

console.log(identity(68, "Semlinker"));
