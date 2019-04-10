var script = document.createElement("script");
script.type = "text/javascript";

// 传参并指定回调函数为onBack
script.src = "http://www.com/callback=onBack";
document.head.appendChild(script);

function onBack(res) {
  alert(JSON.stringify(res));
}
