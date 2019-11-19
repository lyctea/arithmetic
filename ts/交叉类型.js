/**
 * extend 从两个对象中集合属性，返回的对象中包含参数对象的属性
 * <T, U> 定义两个泛型， first: T 指定第一个参数为类型T，第二个参数为类型 U
 * @param first
 * @param second
 */
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x = extend({ a: "h" }, { b: 1 });
var a = x.a;
var b = x.b;
console.log(x);
