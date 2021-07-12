const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || [])  // 匹配1️以 ?=& 开头
    .reduce(
      (a, v) => {
          console.log((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a)
       return (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      },
      {}
    );
// let a = getURLParameters("google.com"); // {}
let b = getURLParameters("http://url.com/page?name=Adam&surname=Smith");

// console.log(a)
console.log(b)