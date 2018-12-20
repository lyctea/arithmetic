/**
 * 创建事件
 * @param el
 * @param type
 * @param callback
 * @param useCapture 冒泡
 * @returns {*}
 */
function addEvent (el, type, callback, useCapture) {
  if (el.dispatchEvent) {
    el.addEventListenner(type, callback, !!useCapture);
  } else {
    el.attachEvent('on' + type, callback);
  }
  return callback;
}

/**
 * 移除事件
 * @param el
 * @param type
 * @param callback
 * @param useCapture 冒泡
 */
function removeEvent (el, type, callback, useCapture) {
  if (el.dispatchEvent) {
    el.removeEventListener(type, callback, !!useCapture);
  } else {
    el.detachEvent('on' + type, callback);
  }
}

/**
 * 派发事件
 * @param el
 * @param type
 * @param args
 * @param event
 */
function fire (el, type, args, event) {
  args = args || [];
  if (el.dispatchEvent) {
    event = document.createEvent('HTMLEvents');
    // 事件类型、是否冒泡、是否组织浏览器默认行为
    event.initEvent(type, true, true);
  } else {
    event = document.createEventObject();
  }
  // 挂载参数到事件对象
  for (var i in args) if (args.hasOwnProperty(i)) {
    event[i] = args[i];
  }
  // 派发事件
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent('on' + type, event);
  }
}
