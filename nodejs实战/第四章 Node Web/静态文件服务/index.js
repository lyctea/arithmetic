var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;

// 得到URL的 pathname，已确定被请求文件的路径
var server = http.createServer(function (req, res) {
  var url = parse(req.url);
  var path = join(root, url.pathname);
  
  fs.stat(path, function (err, stat) {
    if (err) {
      if ('ENOENT' == err.code) { // file no found
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    } else {
      res.setHeader('Content-Length', stat.size);
      var stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error', function (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
    }
  });
  
  // var stream = fs.createReadStream(path);
  //
  // // stream.on('data', function (chunk) {
  // //   res.write(chunk);
  // // });
  // //
  // // stream.on('end', function () {
  // //   res.end();
  // // });
  //
  // // use pipe replace stream
  // stream.pipe(res); // res.end() call in stream.pipe()
  // // catch error when file no found
  // stream.on('error', function (err) {
  //   res.statusCode = 500;
  //   res.end('Internal Server Error');
  //
  // });
});

server.listen(3000);
