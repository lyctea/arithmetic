function insertSort(arr) {
    var len = arr.length

    //数组长度为1时，不需要排序，直接返回
    if (len <= 1) return arr

    for (var i = 1; i < len; i++) {
        // tmp 是需要被插入的元素
        var tmp = arr[i]
        var j = i

        // 遍历已经排序的元素
        while (arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            --j
        }
        arr[j] = tmp
    }
    return arr
}
console.log(insertSort([1, 45, 43, 4, 56, 7, 20, 1]))
