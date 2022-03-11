function QQUsers (QQNo_, QQAge_, QQMark_) {
    this.QQNo = QQNo_
    this.QQAge = QQAge_
    this.QQMark = QQMark_
}

QQUsers.prototype.commonfriends = ['张三','李四','王五']
QQUsers.prototype.show = function () {
    // console.log(this === QQUsers.prototype)
    console.log(`QQNo：${this.QQNo}; Age: ${this.QQAge}; Mark:${this.QQMark}`)
    console.log(`common friends: ${this.commonfriends}`)
}




let QQZhangsan = new QQUsers('396136337', 18, 'hello world')

QQUsers.prototype = {
    QQNo: '123',
    show: function () {
        console.log('fake prototype')}
}

console.log(QQZhangsan.__proto__.show())
console.log('=========')
console.log(QQZhangsan.show())
