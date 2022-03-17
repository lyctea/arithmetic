/*
 * @Author: Jupiter
 * @Date: 2022-03-17 23:31:15
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-17 23:31:15
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/泛型函数.ts
 */

function quickSort<T>(arr: Array<T>): Array<T> {
  if (arr.length < 2) return arr;

  let left: Array<T> = [];
  let right: Array<T> = [];
  let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
  console.log("mid:", mid);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

let demo1 = [3, 1.11845795, 3, 4, 5, 7, 8, 9, 4.35947];
let demo2 = quickSort(demo1);
demo2.forEach((item) => {
  console.log(item.toFixed(2));
});
console.log(demo2);
