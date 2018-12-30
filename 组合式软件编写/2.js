const R = require('ramda')
// const curryF = a => b => c => a + b + c
//
// const f1 = curryF(1)
// const f2 = f1(2)
//
// console.log(f2)


// const add3 = R.curry((a, b, c) => a + b + c);
// console.log(add3(1)(2,3))


const arr = [1, 2,3]
const double = n => n * 2
const gt4 = n => n > 4
const result = arr.map(double).map(double).filter(gt4)
console.log(result)
