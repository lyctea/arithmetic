var PageHandler = {
    id: "123456",
    init: function() {
        document.addEventListener(
            "click",
            function(event) {
                this.doSomething(event.type) // 错误
            }.bind(this),
            false
        )
    },
    doSomething: function(type) {
        console.log(this)
        console.log("Handling " + type + " for " + this.id)
    }
}

// console.log(PageHandler)
PageHandler.init()
