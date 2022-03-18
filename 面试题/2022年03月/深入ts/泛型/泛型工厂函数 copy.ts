/*
 * @Author: Jupiter
 * @Date: 2022-03-18 11:13:31
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-18 15:53:19
 * @Description: 泛型工厂函数.ts;
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/泛型/泛型工厂函数 copy.ts
 */

class CommercialBank {
  public address: string = "beijing";
  public name: string = "wangwu";

  constructor(name: string, address: string) {
    console.log("CommercialBank构造函数：", this.name);

    this.address = address;
    this.name = name;
  }

  loan(): void {
    console.log(this.name + " 银行贷款");
  }
}

/**
 * 工厂函数【一些不方便或者没有办法直接new 类名（）格式来创建对象】
 */
function createInstanceFactory(Constructor: { new (...arg: any): any }) {
  console.log(Constructor.name + "被创建对象");

  return new Constructor("光大银行", "万绿园");
}

// 1.使用工厂函数来创建我们的商业银行对象
let con = createInstanceFactory(CommercialBank);

// 2. 工厂函数类型的简单使用
// 定义任何类的构造函数类型
type ConstructorType = new (...arg: any) => any;
let Constructor: ConstructorType = CommercialBank;
let con2 = new Constructor("招商银行", "万绿园2");

// 3. 泛型工厂函数, 一个类有双重含义，a：构造函数，b：类类型
function createInstanceFactory2<T>(Constructor: iFactoryType<T>) {
  console.log(Constructor.name + "被创建对象");

  return new Constructor("光大银行", "万绿园");
}

// type FactoryType<T> = new (...arg: any) => T;
interface iFactoryType<T> {
  new (...arg: any): T;
}

let con3 = createInstanceFactory2<CommercialBank>(CommercialBank);

export {};
