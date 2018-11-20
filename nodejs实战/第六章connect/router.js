var parse = require('url').parse;
module.exports = function route (obj) {
  return function (req, res, next) {
    if (!obj[req.method]) {
      next();
      return;
    }
    
    var routes = obj[req.method];
    var url = parser(req.url);
    var paths = Object.keys(routes);
    
    for (var i = 0; i < paths.length; i++) {  //遍历路径
      var path = paths[i];
      var fn = routes[path];
      path = path
        .replace(/\//g, '\\/')
        .replace(/:(\w+)/g, '([^\\/]+)');
      var re = new RegExp('^' + path + '$');  //构造正则表达式
      var captures = url.pathname.match(re);
      if (captures) {  //尝试跟pathname匹配
        var args = [req, res].concat(captures.slice(1));  //传递被捕获的分组
        fn.apply(null, args);
        return;  //当有相匹配的函数时，返回，以防止后续的next()调用
      }
    }
    
    next()
  };
  
};
