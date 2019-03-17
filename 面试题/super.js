/*
 * super() 相当于调用父类的构造函数，如果子类不在construct中调用super()
 * 子类就得不到this对象
 *
 * */

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类的 constructor(name)
    this.age = age;
  }
}

var child1 = new Child("kevin", "18");

console.log(child1);
