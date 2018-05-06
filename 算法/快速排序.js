function qSort(arr) {
    if (arr.length == 0) return []

    var left = [] //小于基准存放数组
    var right = [] // 大于基准存放数组
    var pivot = arr[0] //基准值
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qSort(left).concat(pivot, qSort(right))
}
var a = []
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor(Math.random() * 100 + 1)
}

console.log(a)
console.log(qSort(a))
