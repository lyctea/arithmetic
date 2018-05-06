function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1
    while (gap < len / 3) {
        // 动态定义间隔序列 1 4 13
        gap = gap * 3 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp
        }
    }
    return arr
}

var example = [8, 94, 15, 88, 55, 76, 21]

console.log(shellSort(example))
