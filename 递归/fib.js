function fib(n) {
    // 出口，当n小于等于1时，结束递归
    if (n <= 1) return n;

    // 不满足，出口条件 ，持续递归
    return fib(n - 2) + fib(n - 1);
}
