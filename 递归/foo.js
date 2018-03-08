function foo(x) {
    console.log(x);
    if (x < 5) return x;
    return foo(x / 2);
}

console.log(foo(16));