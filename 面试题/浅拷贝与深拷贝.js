/*
 * 1、 对于数组可以使用concat、slice 得到一个新的数组
 * 但是如果数组元素是引用类型，则只复制引用
 * */

/*
 * 2、实现一个浅拷贝
 * 在其基础上实现深拷贝
 * */

var deepCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== "object") return;

  var newObj = obj instanceof Array ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }

  return newObj;
};
