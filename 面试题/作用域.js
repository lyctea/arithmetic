var foo = 1;
var bar = 2;
var i = 2;

function test(i) {
  i = 5;
  var foo = 3;
  bar = 4;
}
test(10);

console.log(foo);
console.log(bar);
console.log(i);