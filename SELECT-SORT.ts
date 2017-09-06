class SelectSort {
    private sortArray: Array<number>

    public constructor(arr: Array<number>) {
        this.sortArray = arr
        this.selectSort()
    }

    private selectSort(): void {
        let len: number = this.sortArray.length

        for (let i: number = 0; i < len; i++) {
            let min: number = this.sortArray[i]
            let temp: number
            let index: number
            for (let j = i + 1; j < len; j++) {
                if (this.sortArray[j] < min) {
                    min = this.sortArray[j]
                    index = j
                }
            }
            temp = this.sortArray[i]
            this.sortArray[i] = min
            this.sortArray[index] = temp
        }
    }

    public printSortWell() {
        console.log(this.sortArray.toString())
    }

}

let selectSort: SelectSort = new SelectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
selectSort.printSortWell()