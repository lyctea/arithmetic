/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var maxArea = 0;
  var length = height.length;
  var head = 0;
  var tail = length - 1;

  while (tail > head) {
    var area = Math.min(height[head], height[tail]) * (tail - head);
    maxArea = Math.max(maxArea, area);
    if (height[head] > height[tail]) {
      tail--;
    } else {
      head++;
    }
  }

  return maxArea;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height)); // 49
