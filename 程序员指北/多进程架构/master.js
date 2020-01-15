const fork = require('child_process').fork
const cpus = require('os').cpus()

const server = require('net').createServer()
server.listen(3000)
process.title = 'node-master'


const workers = {}

const createWorker = () => {
  const worker = fork('worker.js')
  // 监听子进程消息，类型为自杀是，重新创建一个新的子进程
  worker.on('message', function (message) {
    if (message.act === 'suicide') {
      createWorker()
    }
  })

  // 进程退出
  worker.on('exit', function (code, signal) {
    console.log('worker process exited, code: %s single: %s', code, signal)
    delete workers[worker.pid]
  })

  worker.send('server', server)
  worker[worker.pid] = worker
  console.log('worker process created, pid: %s  ppid: %s', worker.pid, worker.ppid)
}


for (let i = 0; i < cpus.length; i++) {
  createWorker()
}

process.once('SIGINT', close.bind(this, 'SIGINT'))
process.once('SIGQUIT', close.bind(this, 'SIGQUIT'))
process.once('SIGTERM', close.bind(this, 'SIGTERM'))
process.once('exit', close.bind(this))


function close(code) {
  console.log('进程退出', code)
  if (code !== 0) {
    for (let pid in workers) {
      console.log('master process exited, kill worker pid:', pid
      workers[pid].kill('SIGINT')
    }
  }

  process.exit(0)
}
