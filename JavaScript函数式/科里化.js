// const getFirstTwoLettersOfWord = word => word.substring(0, 2)
// const subStr = ["aabb", "bbcc", "ccdd", "ddee"].map(getFirstTwoLettersOfWord)
// console.log(subStr)

// arr = [2, 4, 6, 8, 9]
// // LEAVE BE:
// const getMax = (x, y) => {
//     return x >= y ? x : y
// }
//
// // REFACTOR THIS ONE:
// const max = arr => {
//     return arr.reduce((acc, x) => {
//         return getMax(acc, x)
//     }, -Infinity)
// }
// const maxN = arr.reduce(getMax, -Infinity)
//
// console.log(maxN)

var _ = require('ramda');

// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

var words = function (str) {
  return _.split(' ', str);
};

words(1,2)
