class OrderDetail {
    public price!: number
    public num!: number

    constructor(price: number, num: number) {
        this.price = price
        this.num = num
    }

    public count (): number{
        return this.price * this.num
    }
}

const orderDetail = new OrderDetail(10, 2)
console.log(orderDetail.count())
