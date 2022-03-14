/*
 * @Author: Jupiter
 * @Date: 2022-03-14 23:36:42
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-14 23:55:12
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/类型断言.ts
 */

class People {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public some: number
  ) {}
}

class Student {
  public name: string;
  public age: number;
  public address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const people = new People("lyc", 12, "23", 12) as Student;
people.address;

const stu = new Student("2", 2, "s") as People;
stu.some;

// 接口
interface IPeople {
  name: string;
  age: number;
  address: string;
}

class Student1 implements IPeople {
  public name: string;
  public age: number;
  public address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

let iPeople: IPeople = { name: "", age: 23, address: "23" };
const result = iPeople as Student1; // 正确

const student1 = new Student1("", 1, "");
const result1 = student1 as IPeople; // 正确
