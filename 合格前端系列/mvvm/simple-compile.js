function Compile (el, value) {
  this.$val = value;
  // 判断el是否是node节点，如果不是则查询该节点
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);
  if (this.$el) {
    this.compileElement(this.$el);
  }
}

Compile.prototype = {
  compileElement: function (el) {
    let self = this;
    let childNodes = el.childNodes;
    [].slice.call(childNodes).forEach(node => {
      let text = node.textContent;
      let reg = /\{\{((?:.|\n)+?)\}\}/;
      // 如果是element节点，开始解析
      if (self.isElementNode(node)) {
        self.compile(node);
      }
      // 如果是text节点
      else if (self.isTextNode(node) && reg.test(text)) {
        // 匹配第一个选项
        self.compileText(node, RegExp.$1.trim());
      }
      // 解析子节点包含的指令
      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node);
      }
    });
  },
  // 指令解析
  compile: function (node) {
    // 缓存节点元素所有可能属性的集合
    let nodeAttrs = node.attributes;
    let self = this;
    // [].slice.call 能将含有length属性的对象转成数组， 返回所有属性
    [].slice.call(nodeAttrs).forEach(attr => {
      var attrName = attr.name;
      // 如果该属性是指令 {{}}
      if (self.isDirective(attrName)) {
        var exp = attr.value;
        node.innerHTML = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp];
        node.removeAttribute(attrName);
      }
    });
  },
  // {{ test }} 匹配变量 test
  compileText: function (node, exp) {
    node.textContent = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp];
  },
  // element节点
  isElementNode: function (node) {
    return node.nodeType === 1;
  },
  // text纯文本
  isTextNode: function (node) {
    return node.nodeType === 3;
  },
  // x-XXX指令判定
  isDirective: function (attr) {
    return attr.indexOf('x-') === 0;
  }
};
