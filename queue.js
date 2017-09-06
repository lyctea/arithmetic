function Queue () {
    var items = []

    this.enqueue = function (element) {
        items.push(element)
    }

    this.dequeue = function () {
        items.shift()
    }

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.clear = function() {
        items = []
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items.toString())
    }
}


var queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.print()

queue.dequeue()

queue.print()