function StrToInt(str) {
  // write code here
  let res = 0;
  let flag = 1;
  const n = str.length;
  if (!n) return 0; // 输入长度为0
  if (str[0] === "-") flag = -1; // 是负数
  // 判断是否有正负号，有则从第一位开始循环
  for (let i = str[0] === "+" || str[0] === "-" ? 1 : 0; i < n; i++) {
    if (!(str[i] >= "0" && str[i] <= "9")) return 0; // 任何一位不是数值
    res = (res << 1) + (res << 3) + (str[i] - "0"); // 完成12 --》 120
    console.log(res);
  }
  return res * flag;
}

console.log(StrToInt("+120000"));
