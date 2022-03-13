/*
 * @Author: Jupiter
 * @Date: 2022-03-13 08:48:41
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-13 09:13:18
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/原型链继承1.js
 */

function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.eat = () => { console.log(`name: ${this.name}`); }
Parent.prototype.frients = ['pkaqiu', 'momo']



function Son(favor, sex) {
    this.favor = favor
    this.sex = sex
}
Son.prototype = new Parent('lyctea', 18)
// Son.prototype.construct = Son
console.log(Son.prototype.construct);



const son = new Son('eat', '男')
// console.log(son.);