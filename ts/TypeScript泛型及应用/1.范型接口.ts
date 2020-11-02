/**
 * 泛型类
 * 解决：泛型类可确保在整个类中一致地使用指定的数据类型
 * 
 * 问题： 我们什么时候需要使用范型❓🤔️
 * 1、当你当函数、接口或类将处理多种数据类型时🔥
 * 2、当函数、接口或者类在多个地方使用该数据类型时🔥
 * 
 */

interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  getIdentity(): T {
    return this.value;
  }
}

const myNumberClass = new IdentityClass<Number>(68);
console.log(myNumberClass.getIdentity()); // 68

const myStringClass = new IdentityClass<string>("Semlinker!");
console.log(myStringClass.getIdentity()); // Semlinker!