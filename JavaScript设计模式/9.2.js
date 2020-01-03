/*
* 外观模式
* */
function addEvent(dom, type, fn) {
  // 对支持 DOM2 级的事件处理程序
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn)
  } else {
    dom['on' + type] = fn
  }
}
