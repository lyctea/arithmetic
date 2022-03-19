/*
 * @Author: Jupiter
 * @Date: 2022-03-19 10:45:50
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 11:01:16
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/infer/demo2.ts
 */
class CommercialBank {
  static count: number;
  constructor(public name: string, public money: number) {}
}

let count = CommercialBank.count;
let c = new CommercialBank("银行", 100);

/**
 * 通用工厂函数类型
 */
type constructoerType = new (...arg: any) => any;
function createInstanceFactory3(Constructor: constructoerType) {
  console.log(Constructor.name);
  return new Constructor("站上银行", 100);
}
let result2 = createInstanceFactory3(CommercialBank);

/**
 * 泛型工厂函数
 */
type constructoerType4<T> = new (...arg: any) => T;
function createInstanceFactory4<T>(Constructor: constructoerType4<T>) {
  console.log(Constructor.name);
  return new Constructor("站上银行", 100);
}
let result4 = createInstanceFactory4(CommercialBank);

/**
 * 泛型工厂函数，附带参数
 */
type constructorReturnType5<T> = new (...arg: any) => T;

function createInstanceFactory5<T>(
  Constructor: constructorReturnType5<T>,
  ...Parameter: any[]
) {
  return new Constructor(...Parameter);
}
let result5 = createInstanceFactory5(CommercialBank, "工商银行", 10000, 888); //问题：参数随便传，不会报错，也没有限制
