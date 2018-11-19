var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem', 'utf8'),
  cert: fs.readFileSync('./key-cert.pem', 'utf8')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3000);
