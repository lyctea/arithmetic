/*
Array.prototype.distinct = function() {
    var arr = this,
        result = [],
        len = arr.length

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                j = ++i // 如果后面的元素等于当前外层循环遍历的元素，则跳过该元素
            }
        }
        result.push(arr[i]) //i有两种请求，一直是正常遍历的，一种是经过跳跃的值
    }

    return result
}
var arra = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1]
console.log(arra.distinct()) //返回[3,4,2,1]

*/

/*
Array.prototype.distinct = function() {
    var arr = this,
        len = arr.length

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
                len--
                j--
            }
        }
    }

    return arr
}
var arra = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1]
console.log(arra.distinct()) //返回[3,4,2,1]
*/

/*
Array.prototype.distinct = function() {
    var arr = this,
        i,
        obj = {},
        result = [],
        len = arr.length

    for (i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            //如果能查找到，证明数组元素重复了,则不会放到结果数组中
            obj[arr[i]] = 1
            result.push(arr[i])
        }
    }
    return result
}
var a = [1, 2, 3, 4, 5, 6, 5, 3, 2, 4, 56, 4, 1, 2, 1, 1, 1, 1, 1]
console.log(a.distinct()) //1,2,3,4,5,6,56

*/

/*

Array.prototype.distinct = function() {
    var arr = this,
        result = [],
        len = arr.length

    arr.forEach(function(v, i, arr) {
        //这里利用map，filter方法也可以实现
        var bool = arr.indexOf(v, i + 1) //从传入参数的下一个索引值开始寻找是否存在重复
        if (bool === -1) {
            result.push(v)
        }
    })
    return result
}
var a = [1, 1, 1, 1, 23, 3, 3, 2, 3, 3, 1, 23, 1, 23, 2, 3, 2, 2, 3]
var b = a.distinct()
console.log(b.toString()) //1,23,2,3

*/

Array.prototype.distinct = function() {
    var arr = this,
        len = arr.length
    arr.sort(function(a, b) {
        //对数组进行排序才能方便比较
        return a - b
    })

    function loop(index) {
        if (index >= 1) {
            if (arr[index] === arr[index - 1]) {
                arr.splice(index, 1)
            }
            loop(index - 1) //递归loop函数进行去重
        }
    }
    loop(len - 1)

    return arr
}
var a = [1, 2, 3, 4, 5, 6, 5, 3, 2, 4, 56, 4, 1, 2, 1, 1, 56, 45, 56]
var b = a.distinct()
console.log(b.toString()) //1,2,3,4,5,6,45,56
