// 先把可能存在的同名变量保存起来
var _jQuery = window.jQuery, _$ = window.$;

jQuery.extend({
  noConfilct: function (deep) {
    window.$ = _$; // 此时再放回去
    if (deep) {
      window.jQeury = _jQuery;
    }
    return jQeury;
  }
});
