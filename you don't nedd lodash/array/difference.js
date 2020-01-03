let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
const res = arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
console.log(res)
