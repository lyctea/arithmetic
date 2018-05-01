var s1 = 'get-element-by-id' // getElementById

var f = function(s) {
    return s.replace(/-\w+/g, function(x) {
        console.log(x)
        return x.slice(1).toUpperCase()
    })
}

console.log(f(s1))
