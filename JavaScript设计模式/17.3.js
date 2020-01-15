// 观察者
var Observer = (function () {
  var _message = {}
  return {
    regist: function (type, fn) {
      if (typeof _message[type] === 'undefined') {
        _message[type] = [fn]
      } else {
        _message[type].push(fn)
      }
    },
    fire: function (type, args) {
      if (_message[type])
        return;
      var events = {
          type: type,
          args: args || []
        },
        i = 0,
        len = _message[type].length;

      for (; i < len; i++) {
        _message[type][i].call(this, events)
      }
    },
    remove: function (type, fn) {
      if (_message[type] instanceof Array) {
        // 从最后一个消息动作遍历
        var i = _message[type].length - 1;
        for (; i >= 0; i--) {
          // 如果存在该动作则在消息动作序列中移除相应动作
          _message[type][i] === fn && _message[type].splice(i, 1)
        }
      }
    }
  }
})()

Observer.regist('test', function (e) {
  console.log(e.type, e.args.msg)

})

Observer.fire('test', {msg: '传递参数'})
