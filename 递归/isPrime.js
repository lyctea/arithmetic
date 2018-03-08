/**
 * 
 * 判断一个数是否是质数：
 * 从2到 num 的平方根之间的每个整数，看是否存在某一整数可以整除 num (% 求余结果为 0)。
 * 如果存在这样的整数，那么 num 不是质数。反之，是质数。
 * 
 * @param {number}  num  被判断是否是质数
 * @param {number} divisor 
 */

function isPrime(num, divisor = 2) {
    // 出口，非质数
    if (num < 2 || (num > 2 && num % divisor == 0)) {
        return false;
    }

    // 入口，递归的条件
    if (divisor <= Math.sqrt(num)) {
        return isPrime(num, divisor + 1);
    }

    // 出口，质数
    return true;
}

console.log(isPrime(40));