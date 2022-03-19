/*
 * @Author: Jupiter
 * @Date: 2022-03-19 23:29:58
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-20 01:04:01
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/手写Promise/Promise.ts
 */

import { ResolveType, RejectType, Executor } from "./actionType";
class Promise<T = any> {
  public resolve: ResolveType;
  public reject: RejectType;
  public status: string;
  public resolve_executor_value: any;
  public reject_executor_value: any;

  constructor(executor: Executor) {
    this.status = "padding"; // 起始等待状态
    this.resolve = (value: any): any => {
      if (this.status === "padding") {
        this.status = "success";
        value[10] = 100;
        this.resolve_executor_value = value;
      }
    };
    this.reject = (value: any): any => {
      if (this.status === "padding") {
        this.status = "fail";
        this.reject_executor_value = value;
      }
    };

    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.status = "padding";
      this.reject(error.toString());
      throw new Error("程序终止...");
    }
  }

  then(resolveInThen: ResolveType, rejectinThen: RejectType) {
    if (this.status === "success") {
      resolveInThen(this.resolve_executor_value);
    }
    if (this.status === "fail") {
      rejectinThen(this.reject_executor_value);
    }
  }
}

export default Promise;
