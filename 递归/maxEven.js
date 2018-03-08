/**
 * 找出入参最大偶数值
 * @param {*} nums 
 */
function maxEven(...nums) {
    var num = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i] > num) {
            num = nums[i]
        }
    }
    if (num !== -Infinity) {
        return num;
    }
}

/**
 * 
 * 递归法，找出入参最大偶数值
 * @param {any} num1 
 * @param {any} restNums 
 * @returns 
 */
function _maxEven(num1, ...restNums) {
    var maxRest = restNums.length > 0 ? _maxEven(...restNums) : undefined;
    return (num1 % 2 != 0 || num1 < maxRest) ? maxRest : num1;
}


console.log(_maxEven(9878, 45, 65, 98, 65))