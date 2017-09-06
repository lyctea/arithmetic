//创建一个栈
class Stack {
    private items: Array<string> = []

    public push = function (element) {
        this.items.push(element)
    }

    public pop = function () {
        return this.items.pop()
    }

    public peek = function () {
        return this.items[this.items.length - 1]
    }

    public isEmpty = function () {
        return this.items.length == 0
    }

    public size = function () {
        return this.items.length
    }

    public print = function () {
        console.log(this.items.toString())
    }
}

//从十进制到二进制
function divideBy2(decNumber) {
    let remStack: Stack = new Stack()
    let rem: number
    let binaryString: string = ''

    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log(divideBy2(233)) //11101001

//从十进制转换到任何进制
function baseConverter(decNumber, base) {
    let remStack: Stack = new Stack(),
        rem: number,
        binaryString: string = '',
        digits = '0123456789ABCDEF'

    while(decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while(!remStack.isEmpty()) {
        binaryString += digits[remStack.pop().toString()]
    }

    return binaryString
}

console.log(baseConverter(233, 16)) //E9
