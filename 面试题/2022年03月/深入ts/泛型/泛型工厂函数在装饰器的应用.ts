/*
 * @Author: Jupiter
 * @Date: 2022-03-18 15:54:55
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-18 16:06:52
 * @Description: 通过装饰器实现项目路由功能
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/泛型/泛型工厂函数在装饰器的应用.ts
 */

type MyClassDecorator = <T>(target: { new (...arg: any[]): T }) => void;

export function Controller(rootPath: string): MyClassDecorator {
  return function (targetClass) {};
}
