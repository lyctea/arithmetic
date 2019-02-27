/**
 * extend 从两个对象中集合属性，返回的对象中包含参数对象的属性
 * <T, U> 定义两个泛型， first: T 指定第一个参数为类型T，第二个参数为类型 U
 * @param first
 * @param second
 */
function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};

  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x = extend({ a: "h" }, { b: 1 });

const a = x.a;
const b = x.b;

console.log(x);
