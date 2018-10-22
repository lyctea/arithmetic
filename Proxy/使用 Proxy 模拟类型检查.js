let obj = {
  pickyMethodOne: function(obj, str, num) { /* ... */ },
  pickyMethodTwo: function(num, obj) { /*... */ }
};

// 对象的参数列表
const argTypes = {
  pickyMethodOne: ["object", "string", "number"],
  pickyMethodTwo: ["number", "object"]
};

// 改造对象，添加proxy进行校验
obj = new Proxy(obj, {
  get: function(target, key, proxy) {
    var value = target[key];
    return function(...args) {
      var checkArgs = argChecker(key, args, argTypes[key]);
      return Reflect.apply(value, target, args);
    };
  }
});

function argChecker(name, args, checkers) {
  for (var idx = 0; idx < args.length; idx++) {
    var arg = args[idx];
    var type = checkers[idx];
    if (!arg || typeof arg !== type) {
      console.warn(`You are incorrectly implementing the signature of ${name}. Check param ${idx + 1}`);
    }
  }
}

obj.pickyMethodOne();
// > You are incorrectly implementing the signature of pickyMethodOne. Check param 1
// > You are incorrectly implementing the signature of pickyMethodOne. Check param 2
// > You are incorrectly implementing the signature of pickyMethodOne. Check param 3

obj.pickyMethodTwo("wopdopadoo", {});
// > You are incorrectly implementing the signature of pickyMethodTwo. Check param 1

// No warnings logged
obj.pickyMethodOne({}, "a little string", 123);
obj.pickyMethodOne(123, {});
