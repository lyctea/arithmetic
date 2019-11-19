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
var MyPoint = /** @class */ (function () {
    function MyPoint() {
    }
    MyPoint.prototype.test = function () { };
    return MyPoint;
}());
var foo = new MyPoint();
