class SuperType {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class SubType extends SuperType {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayAge() {
    console.log(this.age);
  }
}

const child = new SubType("lyc", 28);
child.sayName();
child.sayAge();
