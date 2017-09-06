class InsertionSort {
    private sortArray: Array<any>

    public constructor(A: Array<any>) {
        this.sortArray = A
        this.insertionSort()
    }

    private insertionSort(): void {
        for (let j = 1; j < this.sortArray.length; j++) {
            let key: any = this.sortArray[j]
            let i: number = j - 1
            
            while (i >= 0 && this.sortArray[i] > key) {
                this.sortArray[i + 1] = this.sortArray[i]
                i = i - 1
            }
            this.sortArray[i + 1] = key
        }
    }

    public printSortResult(): void {
        console.log(this.sortArray)
    }
}

let sort = new InsertionSort([31, 41, 59, 26, 41, 58])
sort.printSortResult()