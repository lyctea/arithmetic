// 条件类型会以一个条件表达式进行类型关系检测，从而在两种类型中选择其一：
// T extends U ? X : Y   ：若 T 能够赋值给 U，那么类型是 X，否则为 Y

interface Dictionary<T = any> {
  [key: string]: T;
}

// value 是字符串类型
type StrDict = Dictionary<string>;
// never 类型表示的是那些永不存在的值的类型, 总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// infer 实现类型抽取
type DictMember<T> = T extends Dictionary<infer V> ? V : never;
type StrDictMember = DictMember<StrDict>;


/**
 * 利用条件类型和 infer 关键字，我们还可以方便地实现获取 Promise 对象的返回值类型，比如：
 */
async function stringPromise() {
  return "hello";
}

interface Person {
  name: string;
  age: number;
}

async function personPromise() {
  return { name: "semlinker", age: 23 } as Person;
}

type PromiseType<T> = (args: any[]) => Promise<T>;
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

type extractStringPromise = UnPromisify<typeof stringPromise>; // string
type extractPersonPromise = UnPromisify<typeof personPromise>; // Person
