/*
 * @Author: luoyec 
 * @Date: 2017-12-07 10:39:26 
 * @Last Modified by: luoyec
 * @Last Modified time: 2017-12-07 10:45:01
 * Promise 学习与实践
 */

/**
 * 延迟100毫秒执行
 *
 * @param {any} ms 延迟毫秒数
 * @returns Promise对象
 */
// function timeout(ms) {
//     return new Promise((resolve, refect) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }

// timeout(100).then(value => {
//     console.log(value);
// });

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at' + url));
        };

        image.src = url;
    });
}
