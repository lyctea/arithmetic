/*
 * @Author: Jupiter
 * @Date: 2022-03-12 17:16:47
 * @LastEditors: Jupiter
 * @LastEditTime: 2022-03-12 17:30:47
 * @Description: 文件描述
 * @FilePath: /arithmetic/面试题/2022年03月/深入ts/单例模式.ts
 */

/**
 * 懒汉式单例模式，单例对象用到的时候才初始化
 */
class MyLocalStorage {
  static localstorage: MyLocalStorage;
  private constructor() {
    console.log("单例模式构造器");
  }

  public static getInstance() {
    if (this.localstorage) {
      return this.localstorage;
    } else {
      this.localstorage = new MyLocalStorage();
      return this.localstorage;
    }
  }

  public setItem() {}
  public getItem() {}
}
const myLocalStorage: MyLocalStorage = MyLocalStorage.getInstance();
myLocalStorage.getItem();

/**
 * 饿汉式单例
 */
class MyLocalStorage2 {
  static localstorage = new MyLocalStorage2();
  private constructor() {
    console.log("单例模式构造器2");
  }

  public setItem() {}
  public getItem() {}
}

const myLocalStorage2 = MyLocalStorage2.localstorage.getItem();
