const flattenDeep = (arr) => arr.flatMap((subArray, index) => Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

flattenDeep([1, [[2], [3, [4]], 5]])
