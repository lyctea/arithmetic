// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })
//
// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// // Error: fail

/*
* p2 返回的是另一个Promise，导致自己的状态无效了
* */

// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then(r => {
//   console.log(r);
// });

/*
* then 返回的是一个新的promise实例
* */

// getJSON('/post/1.json').then(
//   post => getJSON(post.commentURL)
// ).then(
//   comments => console.log('resolved: ', comments),
//   err => console.log('rejected: ', err)
// );

// p.then((val) => console.log('fulfilled:', val))
//   .catch((err) => console.log('rejected', err));
//
// // 等同于
// p.then((val) => console.log('fulfilled:', val))
//   .then(null, (err) => console.log('rejected:', err));

/**
 * 如果已经 resolve 了，那么在此抛出异常则是无效的，也是promise的状态改变后就不能再次改变
 *
 * 错误会冒泡传递，在任何一个promise异常后都会被catch到
 *
 * @type {Promise<any>}
 */
// const promise = new Promise(function(resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise
//   .then(function(value) { console.log(value) })
//   .catch(function(error) { console.log(error) });

const someAsyncThing = function () {
  return new Promise(function (resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
  .catch(function (error) {
    console.log('oh no', error);
  })
  .then(function () {
    console.log('carry on');
  });


