function getUrlParam(url, key) {
    // 解析的结果以对象行使存放
    var arr = {}

    /**
     *  字符串查找替换方法，可以传入字符串或者正则作为第一个参数
     *
     * @param {regexp} 以等号连接的，前面可以有?开始，后面可以有& 结束的
     * @param {any} matchKey 第一个圆括号匹配到的值，也就是参数等号左边的key
     * @param {any} matchValue 第而个圆括号匹配到的值，也就是参数等号右边的value
     * @returns 返回替换后的字符串，原有的字符串不会被改变
     *
     */
    url.replace(/\??(\w+)=(\w+)&?/g, function(match, matchKey, matchValue) {
        if (!arr[matchKey]) {
            arr[matchKey] = matchValue
        } else {
            // 如果参数存在重复，则连接两个参数的值，存放在一个数组中
            var temp = arr[matchKey]
            arr[matchKey] = [].concat(temp, matchValue)
        }
    })

    // 判断第二个参数key，绝对返回内容
    if (!key) {
        return arr
    } else {
        for (ele in arr) {
            if ((ele = key)) {
                return arr[ele]
            }
        }
        return ''
    }
}

var result = getUrlParam('www.baidu.com?name=234234&age=age&name=tt')
console.log(result)
