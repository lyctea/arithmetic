import { injectable, create } from "./ioc";
@injectable
class B {
  public constructor(public a: E) {}
}
@injectable
class C {}
@injectable
class D {}
@injectable
class E {}
@injectable
class A {
  public constructor(public b: B, public c: C, public d: D) {}
}

// 仅需要一行代码
let a = create(A);
