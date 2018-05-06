/**
 * 1、第一轮排序之后就能将最大数放到最后，那么经过 n-1 轮，就能完成所有的排序，所以需要遍历的次数是 n-1
 * 2、内层循环中，max - i 而不是 max？ 因为没经过一轮都会讲最大数放到后面，不再需要对这些已经排序的值进行再次遍历
 * 3、为什么需要标志位，当一次遍历之后发现没有进行任何交换，说明次数数组已经完成排序，跳出循环，返回结果即可
 */

function bubbleSort(data) {
    var max = data.length - 1

    for (var i = 0; i < max; i++) {
        var done = true
        for (var j = 0; j < max - i; j++) {
            if (data[j] > data[j + 1]) {
                var temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = data[j]
                done = false
            }
        }
        if (done) break
    }
    return data
}

var testArr = [12, 34, 34, 5, 6, 7, 6579, 7569, 23.32, 234, 234]

console.log(bubbleSort(testArr))
