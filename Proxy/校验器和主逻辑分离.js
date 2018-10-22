function createValidator (target, validator) {
  return new Proxy(target, {
    _validator: validator,
    set (target, key, value, proxy) {
      if (target.hasOwnProperty(key)) {
        let validator = this._validator[key];
        // 校验写入的 key
        if (!!validator(value)) {
          // 满足条件则通过反射将值写入到 target 上
          return Reflect.set(target, key, value, proxy);
        } else {
          throw Error(`Cannot set ${key} to ${value}. Invalid.`);
        }
      } else {
        //  如果 key 没有在对象中定义，则抛出异常
        throw Error(`${key} is not a valid property`);
      }
    }
  });
}

const personValidators = {
  name (val) {
    return typeof val === 'string';
  },
  age (val) {
    return typeof val === 'number' && age > 18;
  }
};

class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
    return createValidator(this, personValidators);
  }
}

const bill = new Person('Bill', 25);


// 以下操作都会报错
bill.name = 'lyc';
// bill.age = 'Bill';
// bill.age = 15;
