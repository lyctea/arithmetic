function sendAjax() {
    // 构造表单数据
    var formData = new FormData()
    formData.append('username', 'johndoe')
    formData.append('id', 123456)

    // 创建 xhr 对象
    var xhr = new XMLHttpRequest()
    xhr.timeout = 3000
    xhr.responseType = 'text'
    //创建一个 post 请求， 第三个布尔值参数是同步还是异步, 默认是异步
    xhr.open('POST', '/server', true)
    xhr.onload = function(e) {
        if (this.status == 200 || this.status == 304) {
            alert(this.responseText)
        }
    }

    xhr.ontimeout = function(e) {}
    xhr.onerror = function(e) {}
    xhr.upload.onprogress = function(e) {}

    xhr.send(formData)
}

/**
 * 设置请求头 xhr.setRequestHeader('X-Text', 'one')
 * 获取响应头
 */
