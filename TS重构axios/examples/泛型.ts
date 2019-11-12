/**
 * 泛型接口
 */

interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity // myIdentity 的类型是 GenericIdentityFn
