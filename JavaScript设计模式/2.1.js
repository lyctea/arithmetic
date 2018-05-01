/**
 * 采用闭包实现访问控制，缺点是将原型分割出来了
 */

var Book = (function() {
    var price = 12
    return function() {
        function changePrice() {
            price = 10
        }

        this.getPrice = function() {
            changePrice()
            console.log(price)
        }
    }
})()

Book.prototype = {
    jsJSBook: true
}

var book = new Book()
book.getPrice()

/**
 * 一个更完整的案例
 */
var Book1 = (function() {
    var bookNum = 0
    function checkBook(name) {}

    function _book(newID, newName, newPrice) {
        var name, price
        function checkID(id) {}

        this.getName = function() {
            name
        }
    }

    //直接构建原型
    _book.prototype = {
        isJSBook: true
    }

    return _book
})()

var book1 = new Book1()
