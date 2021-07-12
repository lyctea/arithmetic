class User1 {
  constructor(public id: number, public username: string) {}

  postArticle(title: string, content: string): void {
    console.log(
      `${this.username}发表了一篇文章，标题:${title}，内容:${content}`
    );
  }
}

class Vip1 extends User1 {
  constructor(id: number, username: string, public score = 0) {
    super(id, username);
  }

  // 父类方法在子类重写，覆盖
  postArticle(title: string, content: string): void {
    this.score++;
    console.log(
      `${this.username}发表了一篇文章，标题:${title}，积分:${this.score}`
    );
  }

  // 子类新增方法
  postAttachment(file: string): void {
    console.log(`${this.username} 上传了一个附件： ${file}`);
  }
}

let vip1 = new Vip1(1, "小明");
vip1.postArticle("标题", "内容");
vip1.postAttachment("1.png");
