var threeSumClosest = function(nums = [], target) {
  let result = 0;
  const len = nums.length;

  if (len <= 3) {
    return nums.reduce((p, n) => p + n);
  }

  nums.sort((a, b) => a - b);
  result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let lo = i + 1;
    let hi = len - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
        if (result === target) {
          return sum;
        }
      }
      sum > target ? hi-- : lo++;
    }
  }

  return result;
};

let nums = [-1, 2, 1, -4];

console.log(threeSumClosest(nums, 1));
