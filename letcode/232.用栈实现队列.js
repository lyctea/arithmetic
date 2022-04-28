/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        this.in2Out()
    }
    return this.outStack.pop()
};

/**
 * 返回队列开头的元素
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        this.in2Out()
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * 入栈数组和出栈数组都为空时，则队列为空
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.outStack.length === 0 && this.inStack.length === 0
};

/**
 * 将入栈的数组转存到出栈的数组
 */
MyQueue.prototype.in2Out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

