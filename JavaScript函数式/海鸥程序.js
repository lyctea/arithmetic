/*
*  难以理解和跟踪内部状态
* */
// var Flock = function (n) {
//   this.seagulls = n;
// };
//
// Flock.prototype.conjoin = function (other) {
//   this.seagulls += other.seagulls;
//   return this;
// };
//
// Flock.prototype.breed = function (other) {
//   this.seagulls = this.seagulls * other.seagulls;
//   return this;
// };
//
// var flock_a = new Flock(4);
// var flock_b = new Flock(2);
// var flock_c = new Flock(0);
//
// var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
// //=> 32
//
// console.log(result);

var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
//=>16

// 应用同一律
var result = add(multiply(flock_b, flock_a), multiply(flock_a, flock_b));
// 应用分配率
var result = multiply(flock_b, add(flock_a, flock_b));
