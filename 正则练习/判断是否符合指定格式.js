var s1 = '234-234-2342'

var f = function(s = '') {
    return /^(\d{3}-){2}\d{4}$/g.test(s)
}

console.log(f(s1))
