function FindContinuousSequence(sum) {
  let a = 0,
    half = sum >> 1;
  const res = []; // 二维数组，保存开始的数和长度

  while (half--) {
    a++;
    let i = 1;
    while ((i + 1) * (2 * a + i) < 2 * sum) {
      i++;
    }

    if ((i + 1) * (2 * a + i) === 2 * sum) {
      const tmp = [];
      tmp.push(a);
      tmp.push(i);
      res.push(tmp);
    }
  }
  console.log(res);

  // 遍历这个结果
  for (let i = 0; i < res.length; i++) {
    let num = res[i][1], // 长度
      k = 1;
    const tmp = [];
    tmp.push(res[i][0]); // 开始的数
    while (num--) {
      tmp.push(res[i][0] + k);
      k++;
    }
    res[i] = tmp; // 保存结果
  }

  return res;
}

console.log(FindContinuousSequence(36));
