/*
 * @Author: Jupiter
 * @Date: 2022-03-19 09:08:22
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-19 09:12:47
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/infer/泛型+infer.ts
 */
class TestClass {
  public name: string;
  public classno: number;
  constructor(name: string, classno: number) {
    this.name = name;
    this.classno = classno;
  }

  eat() {
    console.log("name is : " + this.name);
  }
}

type ComstructorParametersType<T> = T extends new (...args: any[]) => any;
type Constructor<T> = new (...args: any[]) => T;
