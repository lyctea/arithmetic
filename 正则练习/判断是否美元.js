var s1 = '$1,023,032.03'

var f = function(s = '') {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/g.test(s)
}

console.log(f(s1))
