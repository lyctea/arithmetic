// 引入 events 模块
var events = require("events");

// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();

/*
 * EventEmitter 实例包含的属性
 * _events: 保存一个eventEmitter实例中所有注册时间和事件所对应的处理函数，以键值对方式存储
 * _eventsCount: 表示实例中注册的事件个数
 * _maxListeners: 一个事件所能承载的事件个数
 * domain: 用户捕捉异步回调中出现的异常
 * */

emitter.on("someEvent", function(arg1, arg2) {
  console.log("listener1", arg1, arg2);
});
emitter.on("someEvent", function(arg1, arg2) {
  console.log("listener2", arg1, arg2);
});

setTimeout(() => {
  emitter.emit("someEvent", "arg1 参数", "arg2 参数");
}, 1000);
