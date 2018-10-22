/*
使用 Proxy 保障数据类型的准确性：
* */

let numericDataStore = {
  count: 0,
  amount: 1235,
  total: 14
};

numericDataStore = new Proxy(numericDataStore, {
  set (target, key, value, proxy) {
    if (typeof value !== 'number') {
      throw Error('Properties in numericDataStore can only be numbers');
    }
  
    /**
     * target: 目标对象
     * key: 被设置的属性名
     * value: 被设置的新值
     * proxy: 最初被调用的对象，通常是proxy本身
     */
    return Reflect.set(target, key, value, proxy);
  }
});

// numericDataStore.count = 'foo'
numericDataStore.count = 2333;
