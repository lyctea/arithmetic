var arr = [1, 3, 4, 5, [6, [0, 1, 5], 9], [2, 5, [1, 5]], [5]]

// reduce 提供初始值，使得arr数组从第零项开始遍历
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

var result = flatten(arr)
console.log(result)
