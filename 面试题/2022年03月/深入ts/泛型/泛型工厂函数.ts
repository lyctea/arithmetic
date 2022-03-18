/*
 * @Author: Jupiter
 * @Date: 2022-03-18 11:13:31
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-18 11:22:23
 * @Description: 泛型工厂函数.ts;
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/泛型/泛型工厂函数.ts
 */

class CommercialBank {
  public address: string = "beijing";
  public name: string = "wangwu";

  constructor(name: string, address: string) {
    this.address = address;
    this.name = name;
  }

  loan(): void {
     console.log(this.name + " 银行贷款");
   }
}
  
let cb = new CommercialBank("df", "sdf"); //  创建一个类对象的类型

function CommercialBank_(name: string, address: string) {}

// 定义构造函数类型， new 表示构造函数
type CommercialBankType = new (...arg: any) => CommercialBank;

// 定义任何类的构造函数类型
type ConstructorType = new (...arg: any) => any;

export {};
