/*
* 子进程需要单独运算的逻辑
* */
const computation = () => {
  let sum = 0
  console.info('计算开始')
  console.time('计算耗时')

  for (let i = 0; i < 1e10; i++) {
    sum += 1
  }

  console.info('计算结束')
  console.timeEnd('计算耗时')
  return sum
}


process.on('message', msg => {
  console.log(msg, 'process.pid', process.pid) //子进程的PID
  const sum = computation()

  //如果Node.js进程是通过进程间通信产生的，那么。process.send() 方法可以用来给发进程发送消息🍒
  process.send(sum)
})
