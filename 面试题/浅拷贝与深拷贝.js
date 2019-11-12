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

/*
 * 另一个实现方案
 * */
function deepClone(obj) {
  if (obj === null) return null;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") return obj;

  let t = new obj.constructor();
  for (let key in obj) {
    t[key] = deepClone();
  }

  return t;
}
