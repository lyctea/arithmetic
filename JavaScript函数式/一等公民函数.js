/*
* 把函数用另一个函数包裹起来，目的是延迟执行，但却是糟糕的做法
*
* 例如一下的代码；
* */

var hi = function (name) {
  return 'Hi' + name;
};

var greeting = function (name) {
  return hi(name);
};

//---------------------------------------------

// 太傻了
var getServerStuff = function (callback) {
  return ajaxCall(function (json) {
    return callback(json);
  });
};
// 这才像样
var getServerStuff = ajaxCall;

//---------------------------------------------

return ajaxCall(function (json) {
  return callback(json);
});

// 等于
return ajaxCall(callback);

//---------------------------------------------
var getServerStuff = function (callback) {
  return ajaxCall(callback);
};

// 等于
var getServerStuff = ajaxCall;

//---------------------------------------------
// 这个可笑的控制器（controller）99% 的代码都是垃圾
var BlogController = (function () {
  var index = function (posts) {
    return Views.index(posts);
  };
  
  var show = function (post) {
    return Views.show(post);
  };
  
  var create = function (attrs) {
    return Db.create(attrs);
  };
  
  var update = function (post, attrs) {
    return Db.update(post, attrs);
  };
  
  var destroy = function (post) {
    return Db.destroy(post);
  };
  
  return {index: index, show: show, create: create, update: update, destroy: destroy};
})();

// 把它重写成这样：
var BlogController = {index: Views.index, show: Views.show, create: Db.create, update: Db.update, destroy: Db.destroy};


//---------------------------------------------
