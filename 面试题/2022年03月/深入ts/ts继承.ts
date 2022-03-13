/*
 * @Author: Jupiter
 * @Date: 2022-03-13 23:50:53
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-13 23:55:46
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/ts继承.ts
 */
class Animal1 {
  static cell: string = "多细胞";
  hand: number = 2;
  constructor(hand: number) {
    this.hand = hand;
  }
  eat(): void {
    console.log("Animal eat");
  }
}

class Monkey extends Animal1 {
  foot: number = 2;
  constructor(hand: number, foot: number) {
    super(hand);
    this.foot = foot;
  }

  go(): void {
    console.log("Monkey go");
  }
}

const monkey = new Monkey(2, 4);
