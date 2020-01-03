let arrays = [[1, 2, 3, 3, 3], [101, 2, 1, 10, 3], [2]];

const intersection = arrays.reduce((a, b) => a.filter(_a => b.includes(_a)))

console.log(intersection)
