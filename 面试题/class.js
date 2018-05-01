class SuperClass {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.area = width * height
    }

    getArea() {
        console.log(this.area)
    }
}

class SubClass extends SuperClass {
    constructor(length) {
        super(length, length)
        this.title = "hh"
    }

    getArea() {
        console.log(this.title)
    }
}

var subclass = new SubClass(12)
subclass.getArea()
