/*
 * @Author: Jupiter
 * @Date: 2022-03-19 22:29:34
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 22:47:05
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/高级类型/extract.ts
 */

// type Extract<T, U> = T extends U ? T : never;

namespace ExternalDemo {
  class People {}
  class ChinesePeople extends People {}

  let cp = new ChinesePeople();

  //   type Extract<T, U> = T extends U ? T : never;

  type extractType = Extract<ChinesePeople, People>;
}
