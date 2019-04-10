function duplicates(arr) {
  var map = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }

  for (var key in map) {
    if (map[key] > 1) {
      result.push(key);
    }
  }

  return result;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
