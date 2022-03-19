/*
 * @Author: Jupiter
 * @Date: 2022-03-19 08:33:29
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 10:25:23
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/infer/infer_demo1.ts
 */

interface User {
  name: string;
  age: number;
}

// 推断泛型参数的类型
type ParamType<T> = T extends (...args: infer P) => any ? P : T;

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string

// 团队返回值类型
type ReturnType1<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type demo = ReturnType1<(name: string) => string>;
