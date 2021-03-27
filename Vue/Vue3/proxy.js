/**
 * 当对象中不存在属性名时，默认返回值为 37
 */
// const handler = {
//     get: function(obj, prop) {
//         return prop in obj ? obj[prop] : 37
//     }
// }

// /**
//  * target: 要使用Proxy包装的目标对象（任意的对象、数据、函数、或者另一个proxy）
//  * handler：通常是函数，定义执行各种操作时代理 p 的行为
//  */
// const p = new Proxy({}, handler)

// p.a = 1
// p.b = undefined

// console.log(p.a, p.b)
// console.log('c' in p, p.c)


// /**
//  * 无操作转发代理
//  */
// let target = {}
// let p = new Proxy(target, {})
// p.a = 37
// console.log(target.a)



let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // 表示成功
      return true;
    }
  };
  
  let person = new Proxy({}, validator);
  
  person.age = 100;
  
  console.log(person.age);
  // 100
  
  person.age = 'young';
  // 抛出异常: Uncaught TypeError: The age is not an integer
  
  person.age = 300;
  // 抛出异常: Uncaught RangeError: The age seems invalid