var net = require('net');
var redis = require('redis');

var server = net.createServer(function (socket) {
  var subscriber;
  var publisher;
  
  socket.on('connect', function () {
    subscriber = redis.createClient();   // 为yoghurt创建预定客户端
    subscriber.subscrible('main_chat_room'); //预定信号
    
    subscriber.on('message', function (channel, message) {  // 信道收到消息，发给用户
      socket.write('Channel ' + channel + ': ' + message);
    });
    
    publisher = redis.createClient();
  });
  
  socket.on('data', function (data) {
    publisher.publish('main_chat_room', data);  //用户输入消息后发布它
  });
  
  socket.on('end', function () {
    subscriber.unsubscribed('main_chat_room'); //用户断开连接，终止客户端连接
    subscriber.end();
    publisher.end();
  });
});

server.listen(3000);
