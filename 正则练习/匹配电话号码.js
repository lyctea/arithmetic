function processData(input) {
    var reg = /\d+(?=[- ]?)/g
    var input = input.split('\n')
    input.shift()
    input.map(function(str) {
        var match = str.match(reg)
        console.log(`CountryCode=${match[0]},LocalAreaCode=${match[1]},Number=${match[2]}`)
    })
}

/**
 * match 方法如果带有g全局搜索，则返回一个包含全部匹配结果的数组
 * 如果没有g，则只匹配一次，数组其他项包含其他信息
 */