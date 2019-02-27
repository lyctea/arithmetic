/**
 * reverse接收类型为T 的items数组，并且返回这个类型的数组
 * @param items
 */
function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

const sample = [1, 2, 3];
const reversed = reverse(sample);

console.log(reversed); // 3, 2, 1

// reversed[0] = "1";
// reversed = ["1", "2"];

reversed[0] = 1;
// reversed = [1, 2]; //常量不可改
console.log(reversed); // 3, 2, 1
