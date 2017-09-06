var BinaryAddition = (function () {
    function BinaryAddition() {
        this.A = [1, 1, 0, 0, 1, 0, 1, 1, 1, 0];
        this.B = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1];
        this.C = [];
        this.lastflow = 0;
        this.binaryAdditionResult();
        this.printResult();
    }
    BinaryAddition.prototype.addMethod = function (a, b) {
        var r = a + b + this.lastflow;
        if (r > 1) {
            this.lastflow = 1;
            return r % 2;
        }
        else {
            this.lastflow = 0;
            return r;
        }
    };
    BinaryAddition.prototype.binaryAdditionResult = function () {
        var n = this.A.length;
        for (var i = n - 1; i >= 0; --i) {
            this.C[i + 1] = this.addMethod(this.A[i], this.B[i]);
        }
        this.C[0] = this.lastflow;
    };
    BinaryAddition.prototype.printResult = function () {
        console.log('A  ' + this.A);
        console.log('B  ' + this.B);
        console.log('C  ' + this.C);
    };
    return BinaryAddition;
}());
var binaryAddition = new BinaryAddition();
