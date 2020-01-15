F.module('lib/template', function () {
  var _TplEngine = function (str, data) {
      if (data instanceof Array) {
        var html = '',
          i = 0,
          len = data.length;

        for (; i < len; i++) {
          html += _getTpl(str)(data[i])
        }
        return html
      } else {
        return _getTpl(str)(data)
      }
    },
    _getTpl = function (str) {
      var ele = document.getElementById(str)
      if (ele) {
        var html = /^(textarea|input)$/i.test(ele.nodeName) ? ele.value : ele.innerHTML
        return _compileTpl(html)
      } else {
        return _compileTpl(str)
      }
    },
    _dealTpl = function (str) {
      var _left = '{%',
        _right = '%}'

      return String(str)
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/[\r\t\n]/g, '')
        .replace(new RegExp(_left, 'g'), "');")
        .replace(new RegExp(_right, 'g'), "template_array.push('")
    },
    _compileTpl = function () {

    }

  return _TplEngine
})
