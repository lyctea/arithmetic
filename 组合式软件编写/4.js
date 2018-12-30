const R = require('ramda')


const add1 = n => n + 1;
const double = n => n * 2;

const add1ThenDouble = R.pipe(
  double,
  add1
);

console.log(add1ThenDouble(2)); // 6
