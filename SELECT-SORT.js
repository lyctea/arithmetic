var SelectSort = (function () {
    function SelectSort(arr) {
        this.sortArray = arr;
        this.selectSort();
    }
    SelectSort.prototype.selectSort = function () {
        var len = this.sortArray.length;
        for (var i = 0; i < len; i++) {
            var min = this.sortArray[i];
            var temp = void 0;
            var index = void 0;
            for (var j = i + 1; j < len; j++) {
                if (this.sortArray[j] < min) {
                    console.log(this.sortArray[j]);
                    min = this.sortArray[j];
                    index = j;
                }
            }
            temp = this.sortArray[i];
            this.sortArray[i] = min;
            this.sortArray[index] = temp;
            //console.log(min)
        }
    };
    SelectSort.prototype.printSortWell = function () {
        console.log(this.sortArray.toString());
    };
    return SelectSort;
}());
var selectSort = new SelectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);
selectSort.printSortWell();
