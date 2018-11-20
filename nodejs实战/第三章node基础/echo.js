/**
 * 相应事件只发生一次
 * @type {module:net.Server}
 */
// var net = require('net');

// var server = net.createServer(function (socket) {
//   socket.once('data', function (data) {
//     socket.write(data);
//   });
// });
//
// server.listen(8881);

/**
 * 事件发射与监听
 */
// var EventEmitter = require('events').EventEmitter;
// var channel = new EventEmitter();
//
// /**
//  * 监听事件
//  */
// channel.on('join', function () {
//   console.log('Welcome!');
// });
//
// /**
//  * 发射事件
//  */
// channel.emit('join');

/**
 * 用事件发射器实现的简单的发布/预订系统
 * @type {module:events.internal}
 */
var events = require('events');
var net = require('net');
var channel = new events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};

channel.on('join', function (id, client) {
  this.clients[id] = client;
  this.subscriptions[id] = function (senderId, message) {
    if (id != senderId) {
      this.clients[id].write(message);
    }
  };
  this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function (client) {
  var id = client.remoteAddress + ':' + client.remotePort;
  //  当链接进来时，不需要手动监听connect事件 https://stackoverflow.com/questions/23437008/node-js-net-event-connect-vs-connection
  // client.on('connect', function () {
  //   channel.emit('join', id, client);
  // });
  
  channel.emit('join', id, client);
  
  client.on('data', function (data) {
    data = data.toString();
    channel.emit('broadcast', id, data);
  });
  
});

server.listen(8881);
