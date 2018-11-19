var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

//任务1：确保包含RSS预订源URL列表的文件存在
function checkForRSSFile () {
  fs.exists(configFilename, function (exists) {
    if (!exists)
      return next(new Error('Missing RSS file: ' + configFilename)); //只要有错误就尽早返回
    next(null, configFilename);
  });
}

//任务2：读取并解析包含预订源URL的文件
function readRSSFile (configFilename) {
  fs.readFile(configFilename, function (err, feedList) {
    if (err) return next(err);
    feedList = feedList  //将预订源URL列表转换成字符串，然后分隔成一个数组
      .toString()
      .replace(/^\s+|\s+$/g, '')
      .split('\n');
    var random = Math.floor(Math.random() * feedList.length);  //从预订源URL数组中随机选择一个预订源URL
    next(null, feedList[random]);
  });
}

//任务3：向选定的预订源发送HTTP请求以获取数据
function downloadRSSFeed (feedUrl) {
  request({uri: feedUrl}, function (err, res, body) {
    if (err) return next(err);
    if (res.statusCode != 200)
      return next(new Error('Abnormal response status code'));
    next(null, body);
  });
}

//任务4：将预订源数据解析到一个条目数组中
function parseRSSFeed (rss) {
  var handler = new htmlparser.RssHandler();
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rss);
  if (!handler.dom.items.length)
    return next(new Error('No RSS items found'));
  var item = handler.dom.items.shift();
  console.log(item.title);  //如果有数据，显示第一个预订源条目的标题和URL
  console.log(item.link);
}

var tasks = [checkForRSSFile,  //把所有要做的任务按执行顺序添加到一个数组中
  readRSSFile,
  downloadRSSFeed,
  parseRSSFeed];

function next (err, result) {  //如果任务出错，则抛出异常
  if (err) throw err;  //负责执行任务的next函数
  
  var currentTask = tasks.shift();  //从任务数组中取出下个任务
  
  if (currentTask) {
    currentTask(result);  //执行当前任务
  }
}

next();  //开始任务的串行化执行


