/**
 * 在函数中没有返回，此时方法内部的作用域是全局对象，可以使用安全模式，判断您当前的作用域
 */

var Book = function(title) {
    if (this instanceof Book) {
        this.title = title
    } else {
        return new Book(title)
    }
}

var book = Book("JavaScript")

console.log(book)
console.log(Book)
