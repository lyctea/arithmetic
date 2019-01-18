/*
* Array.from 支持两种类型转为数组： 1、 类似数组 2、可迭代对象
* */
const arrayLike = {
  '0': 't.gouyu@wwkhueor.mm',
  '1': 'o.hmbp@pgvuscn.ro',
  length: 2
};

// const userArray = Array.from(arrayLike);

function helper (val) {
  return val + this.diff;
};

const solt = {
  diff: '__solt'
};

const makeArray = () => {
  return Array.from(arrayLike, helper, solt);
};

console.log(makeArray());
