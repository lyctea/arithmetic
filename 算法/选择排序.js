/**
 * 外层循环遍历 n-1 次
 * 内层循环，每遍历一次，找出最小值的坐标，循环结束后交互外循环坐标和最小坐标元素
 * 内层循环是依次减少的
 *
 */
var example = [8, 94, 15, 88, 55, 76, 21, 39]
function selectSort(arr) {
    var len = arr.length
    var minIndex, temp

    for (var i = 0; i < len - 1; i++) {
        var minIndex = i
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}
console.log(selectSort(example))
