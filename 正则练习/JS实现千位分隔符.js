function format(number) {
    var regx = /\d{1,3}(?=(\d{3})+$)/g
    return (number + '').replace(regx, '$&,') // $&表示与regx相匹配的字符串
}

console.log(format('2342342334'))
