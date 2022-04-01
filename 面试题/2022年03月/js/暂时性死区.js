/*
 * @Author: Jupiter
 * @Date: 2022-04-01 18:35:00
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-04-01 18:43:08
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/js/暂时性死区.js
 */

var a = 100;
if (1) {
    a = 10; // Cannot access 'a' before initialization
    let a = 1; // let声明了局部变量 a, 在声明之前使用便会报错


}