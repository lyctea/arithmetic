/*
 * @Author: Jupiter
 * @Date: 2022-03-20 00:07:33
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-20 15:08:42
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/手写Promise/test.ts
 */
import Promise from "./Promise";

let promise = new Promise((resolve, reject) => {
  resolve("成功");
  //   reject("失败");
});

promise
  .then(
    (res) => {
      console.log("res", res);
    },
    (err) => {
      console.log("err", err);
    }
  )
  .then(
    (res) => {
      console.log("res2", res);
    },
    (err) => {
      console.log("err2", err);
    }
  );
