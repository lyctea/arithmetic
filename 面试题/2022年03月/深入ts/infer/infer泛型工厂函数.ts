/*
 * @Author: Jupiter
 * @Date: 2022-03-19 11:02:19
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 11:21:58
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/infer/infer泛型工厂函数.ts
 */
namespace InferDemo {
  // 商业银行类
  class CommercialBank {
    static count: number;
    constructor(public name: string, public money: number) {}
  }

  // 构造函数类型
  type constructorType = new (...arg: any) => any;
  // 构造函数返回值类型
  type constructorReturnType<T> = new (...arg: any) => T;
  // 构造函数参数类型, 通过infer关键字推断出参数类型
  type constructorParameterType<T extends constructorType> = T extends new (
    ...arg: infer P
  ) => any
    ? P
    : never;

  // 获取具体的构造函数参数类型, 两者等价
  let constructorParameters: constructorParameterType<typeof CommercialBank>;
  let constructorParameters2: constructorParameterType<
    new (name: string, money: number) => CommercialBank
  >;

  // 泛型工厂函数
  function createInstanceFactory<T, P extends constructorType>(
    Constructor: constructorReturnType<T>,
    ...Parameter: constructorParameterType<P>
  ) {
    return new Constructor(...Parameter);
  }

  let result = createInstanceFactory<CommercialBank, typeof CommercialBank>(
    CommercialBank,
    "工商银行",
    10000
  ); //限定参数，有提示

  console.log(result);
}
