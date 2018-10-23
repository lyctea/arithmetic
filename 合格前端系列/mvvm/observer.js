/**
 * @class 发布类
 * @param {{type}} value [vm 参数]
 */
function observe (value, asRootData) {
  if (!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
}

function Observer (value) {
  this.value = value;
  this.walk(value);
}

Observer.prototype = {
  walk: function (obj) {
    let self = this;
    Object.keys(obj).forEach(key => {
      self.observeProperty(obj, key, obj[key]);
    });
  },
  observeProperty: function (obj, key, val) {
    let dep = new Dep(); // 新建数据依赖收集
    let childOb = observe(val);
    
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Dep.target) {
          // 添加数据依赖
          dep.depend();
        }
        if (childOb) {
          // 对子对象添加依赖
          childOb.dep.depend();
        }
        return val;
      },
      set: function (newVal) {
        if (val === newVal || (newVal !== newVal && val !== val)) {
          return;
        }
        val = newVal;
        // 监听子属性
        childOb = observe(newVal);
        // 通知数据变更
        dep.notify();
      }
    });
  }
};

/**
 * @class 依赖类 Dep
 */
let uid = 0;

function Dep () {
  this.id = uid++;
  this.subs = [];
}

Dep.target = null;
Dep.prototype = {
  /**
   * [添加订阅者]
   * @param {[Watcher]} sub [订阅者]
   */
  addSub: function (sub) {
    this.subs.push(sub);
  },
  
  /**
   * [移除订阅者]
   * @param {[Watcher]} sub [订阅者]
   */
  removeSub: function (sub) {
    let index = this.subs.indexOf(sub);
    if (index !== -1) {
      this.subs.splice(index, 1);
    }
  },
  
  /**
   * 通知数据变更
   */
  notify: function () {
    this.subs.forEach(sub => {
      // 执行sub的update更新函数
      sub.update();
    });
  },
  
  /**
   * 添加 Watcher
   */
  depend: function () {
    Dep.target.addDep(this);
  }
};

// 结合Watcher
/**
 * Watcher.prototype = {
*   get: function () {
*     Dep.target = this;
*     let value = this.getter.call(this.vm, this.vm);
*     Dep.target = null;
*     return value;
*   },
*   addDep: function (dep) {
*     dep.addSub(this);
*   }
* }
 */
