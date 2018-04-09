var InsertionSort = (function() {
    function InsertionSort(A) {
        this.sortArray = A
        this.insertionSort()
    }
    InsertionSort.prototype.insertionSort = function() {
        for (var j = 1; j < this.sortArray.length; j++) {
            var key = this.sortArray[j]
            var i = j - 1
            while (i >= 0 && this.sortArray[i] < key) {
                this.sortArray[i + 1] = this.sortArray[i]
                i = i - 1
            }
            this.sortArray[i + 1] = key
        }
    }
    InsertionSort.prototype.printSortResult = function() {
        console.log(this.sortArray)
    }
    return InsertionSort
})()
var sort = new InsertionSort([31, 41, 59, 26, 41, 58])
sort.printSortResult()

let list = [1, 2, 3, 4, 5]
let copy = [...list]
let copy1 = list

console.log(copy)
console.log(copy1)
