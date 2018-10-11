/**
 * 被代理对象
 * @type {{name: string, age: number}}
 */
const target = {
  name: 'Billy Bob',
  age: 15
};

/**
 * 包含所有代理操作的对象
 * @type {{get(*=, *=, *=): *}}
 */
const handler = {
  get (target, key, base) {
    const today = new Date();
    console.log(`GET request made for ${key} at ${today}`);
    
    // 从 target 对象取 key 对应的值，提供给目标 proxy 调用
    return Reflect.get(target, key, base);
  }
};

/**
 * 创建代理对象proxy
 * @type {{name: string, age: number}}
 */
const proxy = new Proxy(target, handler);

// 所有使用 proxy 对 target 属性的访问都会经过handler的处理
console.log(proxy.name);
