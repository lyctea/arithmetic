async function async1() {
  console.log('async1 start') // 2
  await async2()
  console.log('async1 end') // 8
}

async function async2() {
  console.log('async2')  // 3
}

console.log('script start') // 1

setTimeout(function () {
  console.log('setTimeout0') // 10
}, 0)

setTimeout(function () {
  console.log('setTimeout3') //12
}, 3)

setImmediate(() => console.log('setImmediate')); // 11
process.nextTick(() => console.log('nextTick')); // 7

async1();

new Promise(function (resolve) {
  console.log('promise1')  // 4
  resolve();
  console.log('promise2') // 5
}).then(function () {
  console.log('promise3') // 9
})

console.log('script end') // 6


/*
* 1-6 同步任务
* 7-9 本轮循环
* 10 - 12 次轮循环
* */
