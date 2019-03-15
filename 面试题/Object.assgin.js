/*
*  Object.assign 的错误示范
let obj = { name: "程序猿", age: { child: 12 } };
let copy = Object.assign({}, obj);

copy.name = "单身狗";
copy.age.child = 24; // 对age的修改影响到了原来obj对象的属性

console.log(obj); // { name: '程序猿', age:{child: 24} }
* */

/*
 * 顶一个一个新的age对象，将它和obj对象合并，然后拷贝给一个空对象{}，
 * 这样的Object.assign 不会对obj对象有影响
 * */
// let obj = { name: "二月", age: { c: 12 } };
// let age = { c: 88 };
// let o2 = Object.assign({}, obj, { age });
// o2.age.c = 66;
// console.log(obj, o2);

/**
 * 用... 运算符也不会对obj产生影响
 * @type {{name: string, age: {c: number}}}
 */
let obj = { name: "二月", age: { c: 12 } };
let o1 = { ...obj, age: { c: 88 } };
o1.age.c = 66;
console.log(obj, o1);

// !! but Object.assign  也不是深拷贝
