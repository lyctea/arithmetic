/*
// 使用内联注解声明
declare const myPoint1: { x: number; y: number };

// 使用接口， 接口是开放式的，有扩展性
interface Point {
  x: number;
  y: number;
}

declare const myPoint: Point;

interface Point {
  z: number;
}

myPoint.z = 2;


*/

//==============类可以实现接口===========

/*
 * 希望在类中使用必须遵循的接口（类）或者是已经定义的对象结构，可以使用
 * implements 关键字确保兼容性
 * */
interface Point {
  x: number;
  y: number;
  z: string;
}

class MyPoint implements Point {
  x: number;
  y: number;
  z: string;

  constructor() {}
  test() {}
}

let foo: Point = new MyPoint();
