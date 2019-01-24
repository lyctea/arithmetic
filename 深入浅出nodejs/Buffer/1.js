/**
 *  中文和中文符号占3个元素，英文和半角符号占1个元素
 * @type {string}
 */
// const str = '。';
// const buffer = new Buffer(str, 'utf-8');

//console.log(buffer) //<Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 6a 73>

const buffer = new Buffer(100);

/*
*  􏴐􏳺􏳻的􏴎􏳽􏰍􏴌小于0，就􏱃􏴕􏳽􏴖次加256，􏱧到􏱎到一个0到255之􏰭的􏴑数。􏰍􏴌􏱎到 的数􏳽大于255，就􏴖次􏴗256，􏱧
*  到􏱎到0~255区􏰭内的数􏳽。􏰍􏴌是小数，􏴘􏴙小数部分，只 􏴚􏴛􏴑数部分。
* */

buffer[10] = -200;
console.log(buffer[10]);
