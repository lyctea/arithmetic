/*
 * @Author: Jupiter
 * @Date: 2022-03-19 23:29:58
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 23:46:24
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/手写Promise/Promise.ts
 */

import { ResolveType, RejectType, Executor } from "./actionType";
class Promise<T = any> {
  public resolve: ResolveType;
  public reject: RejectType;

  constructor(executor: Executor) {
    this.resolve = (value: any): any => {};
    this.reject = (value: any): any => {};

    executor(this.resolve, this.reject);
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
