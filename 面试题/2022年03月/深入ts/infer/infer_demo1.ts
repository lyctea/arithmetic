/*
 * @Author: Jupiter
 * @Date: 2022-03-19 08:33:29
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 08:57:02
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/infer/infer_demo1.ts
 */

// 基本语法
// type inferType<T> = T extends (param: infer P) => any ? P : T;

interface Customer {
  custname: string;
  buymoney: number;
}

type custFuncType = (cust: Customer, str: Customer) => void;
// type inferType<T> = T extends (params: infer P) => any ? P : T;
type inferType<T> = T extends (params: any) => infer P ? P : T;

type inferResultType = inferType<custFuncType>;
