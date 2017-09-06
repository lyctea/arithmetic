function Stack() {
    var items = []

    this.push = function (element) {
        items.push(element)
    }

    this.pop = function () {
        items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items.toString())
    }
}




function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binarymString = ''

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while (!remStack.isEmpty()){
        console.log(remStack.pop())
        //binarymString += remStack.pop().toString()
    }

    return binarymString
}

console.log(divideBy2(233))
console.log(divideBy2(10))
console.log(divideBy2(256))