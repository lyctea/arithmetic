/*
 * @Author: Jupiter
 * @Date: 2022-03-18 23:40:03
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-18 23:44:38
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/交叉类型/交叉类型.ts
 */

let myassert = {
  custname: "caipiao",
  phone: 111,
  address: "shenzhen",
};

type objtype = { custname: string; phone: number };
type objtype2 = { custname: string; phone: number; age: number };
myassert as objtype;

let obj = {};
let ob = obj as objtype & objtype2;
