function isOdd(v) {
    if (v === 0) return false;
    return isEven(Math.abs(v) - 1);
}

function isEven(v) {
    if (v === 0) return true;
    return isOdd(Math.abs(v) - 1);
}

console.log(isEven(31));