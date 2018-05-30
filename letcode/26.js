/**
 * 算法的是对一个已经排过序的数组进行去重，只要比对前后项是否一样
 * 如果相等则跳过该元素，否则将其压入数组中，
 * 需要一个变量记录当前压入的次数，最后截断原数组即可
 */

var removeDuplicates = function(nums) {
  if (nums == null || nums.length == 0) return 0;
  if (nums.length == 1) return 1;

  var count = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[count] != nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  nums.length = ++count;
  return count;
};
var test = [1, 1, 1, 2, 2, 2, 2, 3];

removeDuplicates(test);
