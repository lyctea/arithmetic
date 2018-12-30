// 过程式
// const g = n => n + 1;
// const f = n => n * 2;
//
// const doStuff = x => {
//   const afterG = g(x);
//   const afterF = f(afterG);
//   return afterF;
// };
//
// console.log(doStuff(20)) ; // 42
//
// const g = n => n + 1;
// const f = n => n * 2;
//
// // 根据函数调用栈 doStuffBetter --》 function(x=>) --> function(f) --> function(g)
// // 在出栈的时候依次返回，所以结果就是  (20+1) * 2 = 42
// const doStuffBetter = x => f(g(x));
//
// console.log(doStuffBetter(20)); // 42

// const doStuff = x => {
//   const afterG = g(x);
//   console.log(`after g: ${ afterG }`);
//   const afterF = f(afterG);
//   console.log(`after f: ${ afterF }`);
//   return afterF;
// };
//
// console.log(doStuff(20)) ; // =>

compose2 = f => g => x => f(g(x));

const double = n => n * 2
const inc = n => n + 1

console.log(compose2(double)(inc)(3));
