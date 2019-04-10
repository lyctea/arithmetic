var ajax = new XMLHttpRequest();
ajax.open("get", "www.baidu.com");
ajax.send();
ajax.onreadystatechange = function() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    console.log(ajax.responseText);
  }
};
