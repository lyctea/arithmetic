/*
 * @Author: luoyec 
 * @Date: 2017-12-07 09:58:15 
 * @Last Modified by: luoyec
 * @Last Modified time: 2017-12-07 10:22:06
 * 
 * Generator函数的学习与实践
 */

/** 最简单的用法
 *

function* helloWorldgenerator() {
    yield 'hello';
    yield 'world'; //连续打印go on 直到遇到下一个yeild
    console.log('go on');
    console.log('go on1');
    console.log('go on2');
    return; //之后的yield不会被执行
    yield 'ending';
}

var hw = helloWorldgenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
 *
 */

/**
 * 调用gen会生成一个遍历器对象g。它的Symbol.iterator属性也是一个遍历器独享生成函数
 * 
 
function* gen() {
    console.log('print...');
}

var g = gen();

let result = g[Symbol.iterator]() === g;

console.log(result); //true

*/

function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
}

var a = foo(5);
console.log(a.next(2));
console.log(a.next(12));
console.log(a.next(13));
