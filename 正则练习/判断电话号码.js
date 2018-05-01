var s1 = '13898762123'

var f = function(s = '') {
    return /^1[34578]\d{9}$/g.test(s)
}

console.log(f(s1))
