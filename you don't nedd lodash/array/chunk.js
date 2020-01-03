const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    console.log(arr)
    return idx % size === 0
      ? [...arr, [item]] // 能整除，取当前元素追加到 acc
      : [...arr.slice(0, - 1), [...arr.slice(-1)[0], item]];  // 不能被整处，取 acc前n-1个元素与acc最后一个元素
  }, [])
}

console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2))
