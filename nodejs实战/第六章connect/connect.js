var connect = require('connect');
var app = connect();

function logger (req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
};

function hello (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world\n');
}

function restrict (req, res, next) {
  var authorization = req.headers.authorization;
  if (!authorization) return next(new Error('Unauthorized'));
  var parts = authorization.split('');
  var scheme = parts[0];
  
  var auth = new Buffer(parts[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  authenticatewithDatabase(user, pass, function (err) {
    if (err) return next(err);
    next();
  });
}

// app.use(logger);
// app.use(hello);
// app.listen(3000);
connect()
  .use(logger)
  .use(hello)
  .listen(3000);
