var nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function(nums) {
  // 返回结果
  let rtn = [];
  // 长度小于3，直接返回 []
  if (nums.length < 3) {
    return rtn;
  }
  // 数组从小到大排序
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    //如果 i = 0 的元素都大于0，返回[]
    if (nums[i] > 0) {
      return rtn;
    }
    // 如果第二个元素和第一个元素相等时，继续循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      let sum = nums[i] + nums[j] + nums[k];
      // 定义 j k
      // j 从 i + 1 遍历到 k前面
      // k 从最后一个元素往前遍历
      if (sum === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // 当j往后，遇到重复的值的时候，跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        // 当k往前遍历，遇到重复值，跳过
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        // 当和 > 0 时，因为此时 nums[j] 是递增状态，当前最小值
        // nums[k] 为当前最大值，所以减小 k
        k--;
      } else {
        j++;
      }
    }
  }

  return rtn;
};
console.log(threeSum(nums));
