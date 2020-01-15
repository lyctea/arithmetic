const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer(function (req, res) {
  const fileName = path.resolve(__dirname, 'data.txt')
  let stream = fs.createReadStream(fileName)
  stream.pipe(res)

})

server.listen(3000)
