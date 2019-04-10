function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (input.length === 0 || k > input.length || k < 1) return [];
  const left = 0;
  const right = input.length - 1;
  let key = partition(input, left, right);

  while (key !== k - 1) {
    if (key > k - 1) {
      key = partition(input, left, key - 1);
    } else {
      key = partition(input, key + 1, right);
    }
  }

  const res = input.slice(0, key + 1);
  res.sort((a, b) => a - b);
  return res;
}

function partition(a, left, right) {
  const key = a[left]; // 一开始让key为第一个数
  while (left < right) {
    // 扫描一边
    while (key <= a[right] && left < right) {
      right--;
    }
    [a[left], a[right]] = [a[right], a[left]]; // 交换
    while (key >= a[left] && left < right) {
      // 如果key大于a[left] ，则left递增，继续比较
      left++;
    }
    [a[left], a[right]] = [a[right], a[left]];
  }
  console.log(left);
  return left; // 把key所在的下标返回
}

GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4);
