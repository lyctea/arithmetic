var connect = require('connect');
var router = require('./middleware/router');

var routes = {  //定义路由的对象
  GET: {
    '/users': function (req, res) {
      res.end('tobi, loki, ferret');
    },
    '/user/:id': function (req, res, id) {  //其中的每一项都是对请求URL的映射，并包含要调用的回调函数
      res.end('user ' + id);
    }
  }, DELETE: {
    '/user/:id': function (req, res, id) {
      res.end('deleted user ' + id);
    }
  }
};

connect()
  .use(router(routes))
  .listen(3000);

