/*
 * @Author: Jupiter
 * @Date: 2022-03-12 15:03:04
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-12 15:35:09
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/JavaArrayList简易版.ts
 */

/**
 * 1、对现有数组进行封装；
 * 2、提供get方法、remove方法、显示方法、add方法
 * 3、利用方法重载实现
 */

class ArrayList {
  constructor(public element: Array<object>) {}

  get(index: number) {
    return this.element[index];
  }

  show() {
    this.element.forEach((ele) => console.log(ele));
  }

  remove(value: number): number;
  remove(value: object): object;
  remove(value: number | object): number | object {
    if (typeof value === "number") {
      return 1;
    } else {
      return { name: "a", age: 23 };
    }
  }
}

let stuOne = { name: "a", age: 23 };
let stuTwo = { name: "b", age: 23 };
let stuThree = { name: "c", age: 23 };

const arrayList = new ArrayList([stuOne, stuTwo, stuThree]);
arrayList.show();

arrayList.remove(1);
arrayList.remove(1);
