var bar,someValue;
function test(data) {
  var goo, i, e;

  if (false) {
      goo = 1;

  } else {
      goo = 2;
  }
  for(i = 0; i < 100; i++) {
      e = data[i];
  }
}
bar();
bar = function() {};
someValue = 42;

test();

