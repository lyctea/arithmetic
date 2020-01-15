// cluster 开启子进程Demo
const http = require('http')
const numCPUs = require('os').cpus().length
const cluster = require('cluster')

console.log(numCPUs)

if (cluster.isMaster) {
  console.log('Master process id is', process.pid)
  // fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker process died , id', worker.process.pid)
  })
} else {
  http.createServer(function (req, res) {
    // worker可以共享同一个 TCP 连接
    res.writeHead(200)
    res.end('res end !')
  }).listen(8000)
}
