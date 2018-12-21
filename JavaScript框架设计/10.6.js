//http://dean.edwards.name/weblog/2005/10/add-event/

function addEvent (element, type, handler) {
  // 回调添加UUID，方便移除
  if (!handler.$$guid) handler.$$guid = addEvent.guid++;
  
  // 元素添加events，保存所有类型的回调
  if (!element.events) element.events = {};
  
  var handlers = element.events[type];
  if (!handler) {
    // 创建一个子对象，保存当前类型的回调
    handler = element.events[type] = {};
    
    if (element['on' + type]) {
      handlers[0] = element['on' + type];
    }
  }
  // 保存当前的回调
  handlers[handler.$$guid] = handler;
  // 所有回调统一由handleEvent触发
  element['on' + type] = handleEvent();
}

addEvent.guid = 1; // UUID
// 移除事件，从当前事件类别的存储对象中delete
function removeEvent (element, type, handler) {
  if (element.events && element.events[type]) {
    delete element.events[type][handler.$$guid];
  }
}

function handleEvent (event) {
  var returnValue = true;
  // 统一事件对象组织默认行为与事件传统的接口
  event = event || fixEvent(window.event);
  // 根据事件类型，取得要处理回调集合，由于UUID是纯数字，因此可以按照绑定时的顺序执行
  var handlers = this.events[event.type];
  for (var i in handlers) {
    this.$$handleEvent = handlers[i];
    // 根据返回值判断是否阻止冒泡
    if (this.$$handleEvent(event) === false) {
      returnValue = false;
    }
  }
  
  return returnValue;
}

// 对IE的事件事件做简单修复
function fixEvent (event) {
  event.preventDefault = fixEvent.preventDefault;
  event.stopPropagation = fixEvent.stopPropagation;
  return event;
}

fixEvent.preventDefault = function () {
  this.returnValue = false;
};

fixEvent.stopPropagation = function () {
  this.cancelBubble = true;
};
