// ReturnType<T> 的作用是用于获取函数 T 的返回类型。

type T01 = ReturnType<() => string>; // string
type T11 = ReturnType<(s: string) => void>; // void
type T21 = ReturnType<<T>(s: T) => T>; // {}
type T31 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T41 = ReturnType<any>; // any
type T51 = ReturnType<never>; // never
// type T61 = ReturnType<string>; // Error
// type T71 = ReturnType<Function>; // Error