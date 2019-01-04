var Maybe = function (x) {
  this.__value = x;
};

// 利用Maybe做空值检查
Maybe.of = function (x) {
  return new Maybe(x);
};

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};
