function outter() {
  var private = "I am private";
  function show() {
    console.log(private);
  }
  // [[scope]]已经确定：[outter上下文的变量对象，全局上下文变量对象]
  return show;
}

var ref = outter();
// console.log(private);  // 尝试直接访问private会报错：private is not defined
ref(); // 打印I am private
