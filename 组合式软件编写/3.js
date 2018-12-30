// const censor = words => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.length !== 4) filtered.push(word);
//   }
//   return filtered;
// };
//
// const result = censor(['oops', 'gasp', 'shout', 'sun']);
// console.log(result)

// const startsWithS = words => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.startsWith('s')) filtered.push(word);
//   }
//   return filtered;
// };
//
// const result1 = startsWithS(['oops', 'gasp12', 'shout', 'sun']);
// // [ 'shout', 'sun' ]
//
// console.log(result1)

const reduce = (reducer, initail, arr) => {
  let acc = initail;
  for (let i = 0, len = arr.length; i < len; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
};

const result = reduce((a, c) => a + c, 0, [1, 2, 3]);
console.log(result);

const filter = (
  fn, arr
) => reduce((acc, curr) => fn(curr) ?
  acc.concat([curr]) :
  acc, [], arr
);
