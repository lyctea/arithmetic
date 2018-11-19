/**
 * Array.prototype.slice.call(arguments): 将具有 length 属性的对象转成数组
 */
var a = {length: 2, 0: 'first', 1: 'second'};
Array.prototype.slice.call(a);


/*
* 在HTMLCollection、NodeList并不是Object的子类，不能使用上面的方法扩展成数组
* */
// JQuery 的makeArray
