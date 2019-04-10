const shuffle = function(arr) {
  let m = arr.length;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    [arr[i], arr[m]] = [arr[m], arr[i]];
  }

  return arr;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(arr));
