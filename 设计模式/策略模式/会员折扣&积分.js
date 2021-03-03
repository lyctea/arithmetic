const priceStrategy = {
  level1(price) {
    return price * (98 / 100);
  },
  level2(price) {
    return price * (95 / 100);
  },
  level3(price) {
    return price * (90 / 100);
  },
  level4(price) {
    return price * (88 / 100);
  },
  level5(price) {
    return price * (85 / 100);
  },
};

const cumulativeScoreStrategy = {
  level1(price) {
    return Math.floor(price);
  },
  level2(price) {
    return Math.floor(price * 1.1);
  },
  level3(price) {
    return Math.floor(price * 1.2);
  },
  level4(price) {
    return Math.floor(price * 1.3);
  },
  level5(price) {
    return Math.floor(price * 1.4);
  },
};

function calculatePrice(level, price) {
  return priceStrategy[level] ? priceStrategy[level](price) : 0;
}

function calculateScore(level, price) {
  const actually = calculatePrice(level, price);
  return (
    cumulativeScoreStrategy[level] && cumulativeScoreStrategy[level](actually)
  );
}

//  一台的彩电的价格是 8888，钻石会员的折后价
calculatePrice("level4", 8888); // 7554.8
// 获得的积分
calculateScore("level4", 8888); // 10567

// 一个策略模式的程序至少有两部分组成。第一部分是策略类，策略类封装了具体的算法，负责具体的计算过程。
// 第二部分是环境类Context，它接受了客户的要求，随后吧请求委托给某一具体的策略
