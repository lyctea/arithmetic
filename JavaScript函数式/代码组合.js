// x是函数组合后的参数，f 和 g 都是函数，x 是在它们之间通过“管道”传输的值
// g函数先被执行，所以compose组合的函数是从右往左执行
const compose = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};

var toUpperCase = x => x.toUpperCase();
var exclaim = x => x + '!';
var shout = compose(exclaim, toUpperCase); // 对函数进行组合

console.log(shout('send in the clowns'));

// 因为是纯函数，函数组合的顺序不影响结果的输出，符合数学的组合率
// 又因为调用分组不重要，所以结果一样，这为写一个可变的组合提供了可能，
// 自由选择函数进行组合，最大限度实现函数的可复用性
