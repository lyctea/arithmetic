Array.prototype.uniq = function () {
  var resArr = []
  var flag = true


  for (var i = 0; i < this.length; i++) {
    if (resArr.indexOf(this[i]) === -1) {
      if (this[i] !== this[i]) {  //排除NaN
        if (flag) {
          resArr.push(this[i])
          flag = false
        }
      } else {
        resArr.push(this[i])
      }
    }
  }


  return resArr
}


const arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

console.log(arr.uniq())
