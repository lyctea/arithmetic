/**
 * 循环求和
 * @param {number} total 求和
 * @param {array} nums 参数数组
 */
function sum(total, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
    }

    return total;

}


/**
 * 递归求和
 * @param {number} total 求和
 * @param {array} nums 参数数组
 */
function _sum(num1, ...nums) {
    if (nums.length == 0) return num1;
    return num1 + _sum(...nums);
}


console.log(_sum(0, 1, 2, 3, 4, 10))