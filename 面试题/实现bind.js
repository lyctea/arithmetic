if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var self = this;
    var context = [].shift.call(arguments); // this
    var args = [].slice.call(arguments); // 剩下的参数

    return function() {
      self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    };
  };
}
