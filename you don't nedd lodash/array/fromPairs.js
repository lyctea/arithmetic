const fromPairs = arr => arr.reduce((acc, val) => {
  console.log(acc[val[0]])
  return (acc[val[0]] = val[1], acc)
}, {})

const res = fromPairs([['fred', 30], ['barney', 40]])

console.log(res)
