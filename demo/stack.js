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

var stack = new Stack()
console.log(stack.isEmpty())

stack.push(3)
stack.push(6)
stack.push(8)
stack.print()

console.log(stack.peek)

export default Stack

