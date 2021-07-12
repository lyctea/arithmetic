/*
 * @Author: Jupiter
 * @Date: 2021-06-30 16:30:06
 * @LastEditors: Jupiter
 * @LastEditTime: 2021-07-01 10:11:05
 * @Description: 文件描述
 * @FilePath: /arithmetic/设计模式之美/oopDemo/方法重载.ts
 */
class User2 {
  constructor(public id: number, public username: string) {}

  postArticle(title: string, content: string): void {
    console.log(
      `${this.username}发表了一篇文章，标题:${title}，内容:${content}`
    );
  }
}

class Vip2 extends User2 {
  constructor(id: number, username: string, public score = 0) {
    // 如果子类没有重写构造函数，则会在默认的 constructor 中调用 super()
    // 如果子类有自己的构造函数，则需要在子类构造函数中显示的调用父类构造函数 : super(//参 数) ，否则会报错
    // 在子类构造函数中只有在 super(//参数) 之后才能访问
    // this 在子类中，可以通过 super 来访问父类的成员属性和方法
    // 通过 super 访问父类的的同时，会自动绑定上下文对象为当前子类 this
    super(id, username);
  }

  // 参数个数，参数类型不同：重载
  postArticle(title: string, content: string): void;
  postArticle(title: string, content: string, file: string): void;
  postArticle(title: string, content: string, file?: string) {
    // 调用父类的方法
    super.postArticle(title, content);

    // 如果第三个参数存在
    if (file) {
      // 调用子类方法
      this.postAttachment(file);
    }
  }

  postAttachment(file: string): void {
    console.log(`${this.username} 上传了一个附件： ${file}`);
  }
}

// 使用场景
let vip2 = new Vip2(1, "小明");
vip2.postArticle("标题", "内容", "file");
