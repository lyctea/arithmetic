class BinaryAddition {
    private A: Array<number> = [1, 1, 0, 0, 1, 0, 1, 1, 1, 0]
    private B: Array<number> = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1]
    private C: Array<number> = []
    private lastflow: number = 0

    public constructor() {
        this.binaryAdditionResult()
        this.printResult()
    }

    private addMethod(a: number, b: number): number {
        let r: number = a + b + this.lastflow
        if (r > 1) {
            this.lastflow = 1
            return r % 2
        } else {
            this.lastflow = 0
            return r
        }
    }

    private binaryAdditionResult(): void {
        let n: number = this.A.length
        for (let i = n - 1; i >= 0; --i) {
            this.C[i + 1] = this.addMethod(this.A[i], this.B[i])
        }
        this.C[0] = this.lastflow
    }

    private printResult(): void {
        console.log('A  ' + this.A)
        console.log('B  ' + this.B)
        console.log('C  ' + this.C)
    }

}

let binaryAddition: BinaryAddition = new BinaryAddition()