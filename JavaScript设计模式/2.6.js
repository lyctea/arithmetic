/**
 * JavaScript 实现多继承
 */
Object.prototype.mix = function() {
    var i = 1,
        len = arguments.length,
        arg

    //遍历被继承的对象
    for (; i < len; i++) {
        //缓存当前对象
        arg = arguments[i]
        for (var property in arg) {
            this[property] = arg[property]
        }
    }
}

var book = {
    name: "JavaScript",
    alike: ["css", "js"]
}

var anotherBook = {
    color: "red"
}

var newBook = {}

newBook.mix(newBook, anotherBook, book)
