/**
 * 类型被接口约束
 */
interface LengthWise {
  length: number
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}


loggingIdentity({length: 3})


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a')
getProperty(x, 'm')


function create<T>(c: { new(): T }): T {
  return new c()
}


