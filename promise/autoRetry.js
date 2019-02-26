function autoRetry(func, retryMax) {
  retryNum = 0;
  let funcName = func.toString().match(/function (\w+)\(/)[1];
  return (funcR = function() {
    let params = arguments;
    return new Promise((resolve, reject) => {
      func(...params)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          if (retryNum < retryMax) {
            retryNum++;
            console.warn(
              `[autoRetry] Catched error when ${funcName}() : ${
                err.message
                }. Retry ${retryNum} time...`
            );
            resolve(funcR(...params));
          } else {
            reject(err);
          }
        });
    });
  });
}

function foo(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        JSON.parse("{{");
        return resolve(param);
      } catch (err) {
        return reject(err);
      }
    }, 1000);
  });
}

foo = autoRetry(foo, 3);

foo(123)
  .then(r => {
    console.log("成功返回");
    console.log(r);
  })
  .catch(e => {
    console.log("最后错误");
    console.log(e);
  });

(async function() {
  try {
    let result = await foo(123);
  } catch (e) {
    console.log(e);
  }
})();
