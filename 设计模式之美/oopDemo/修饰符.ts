/*
 * @Author: Jupiter
 * @Date: 2021-06-30 17:54:11
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-13 23:51:45
 * @Description: 文件描述
 * @FilePath: /arithmetic/设计模式之美/oopDemo/修饰符.ts
 */
/*
    public：公有，默认 。访问级别：自身、子类、类外。
    protected：受保护。访问级别：自身、子类。
    private：私有 。访问级别：自身
    readonly：只读，只针对成员属性，必须在声明时或者构造函数内初始化。访问级别：自身、子类、类外。
 */

/**
 * 上面的例子中，name 被设置为了 public，所以直接访问实例的 name 属性是允许的。
 */
// class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal("Jack");
// console.log(a.name); // Jack
// a.name = "Tom";
// console.log(a.name); // Tom

/**
 * 我们希望有的属性是无法直接存取的，这时候就可以用 private 了：
 */
// class Animal {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal("Jack");
// console.log(a.name); // Jack
// a.name = "Tom";

// 而如果是用 protected 修饰，则允许在子类中访问：

class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  public constructor(name) {
    super(name);
  }

  sayName() {
    console.log(this.name);
  }
}

let a = new Dog("Jack");
// console.log(a.name);
console.log(a.sayName());
