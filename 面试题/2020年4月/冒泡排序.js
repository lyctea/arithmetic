function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].charCodeAt() > arr[j + 1].charCodeAt()) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

var a = ['B', 'A', 'E', 'C', 'D']
sort(a)
console.log(a)
