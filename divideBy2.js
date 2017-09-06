//创建一个栈
var Stack = (function () {
    function Stack() {
        this.items = [];
        this.push = function (element) {
            this.items.push(element);
        };
        this.pop = function () {
            return this.items.pop();
        };
        this.peek = function () {
            return this.items[this.items.length - 1];
        };
        this.isEmpty = function () {
            return this.items.length == 0;
        };
        this.size = function () {
            return this.items.length;
        };
        this.print = function () {
            console.log(this.items.toString());
        };
    }
    return Stack;
}());
//从十进制到二进制
function divideBy2(decNumber) {
    var remStack = new Stack();
    var rem;
    var binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233));
//从十进制转换到任何进制
function baseConverter(decNumber, base) {
    var remStack = new Stack(), rem, binaryString = '', digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop().toString()];
    }
    return binaryString;
}
console.log(baseConverter(233, 16));
