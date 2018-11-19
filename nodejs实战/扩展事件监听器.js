/**
 * 1、创建类的构造器
 * 2、继承事件发射器的行为
 * 3、扩展这些行为
 */

function Watcher (watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

// 继承自事件发生器行为
var events = require('events');
var util = require('util');
// 用 inherits 继承另一个对象看起来更简洁，这是node内置util模块的
util.inherits(Watcher, events.EventEmitter);


// add two new function inherit from EventEmitter
var fs = require('fs');
var watchDir = './watch';
var processDir = './done';

/**
 * this function loop all this dir, deal with all files
 */
Watcher.prototype.watch = function () {
  var watcher = this;
  fs.readdir(this.watchDir, function (err, files) {
    if (err) throw  err;
    for (var index in files) {
      watcher.emit('process', files[index]);
    }
  });
};

/**
 * this function start listen dir
 */
Watcher.prototype.start = function () {
  var watcher = this;
  fs.watchFile(watchDir, function () {
    watcher.watch();
  });
};

// new Watcher and set to work
var watcher = new Watcher(watchDir, processDir);
watcher.on('process', function process (file) {
  var watchFile = this.watchDir + '/' + file;
  var processedFile = this.processedDir + '/' + file.toLowerCase();
  fs.rename(watchFile, processedFile, function (err) {
    if (err) throw err;
  });
});

watcher.start();
