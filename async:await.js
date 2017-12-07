/*
 * @Author: luoyec 
 * @Date: 2017-12-07 11:13:59 
 * @Last Modified by: luoyec
 * @Last Modified time: 2017-12-07 11:35:47
 */

/**
 * 获取股票报价
 *
 * @param {any} name
 * @returns
 */
// async function getStockPriceByNmae(name) {
//     var symbol = await getStockSymbol(name);
//     var stockPrice = await getStockPriceByNmae(symbol);
//     return stockPrice;
// }

// getStockPriceByNmae('good').then(function(result) {
//     console.log(result);
// });

/**
 * 500毫秒延迟打印
 *
 * @param {any} ms
 * @returns
 */
// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//         reject('error');
//     });
// }

// async function asyncPrint(value, ms) {
//     // try {
//     //     await timeout(ms); //返回结果可能是Rejected，最好用try..catch包裹
//     // } catch (err) {
//     //     console.log(err);
//     // }
//     await timeout(ms).catch(function(err) {
//         //另一种容错处理
//         console.log(err);
//     });
//     console.log(value);
// }

// asyncPrint('hello', 500);

async function chainAnimationsAsync(elem, animations) {
    var ret = null;
    try {
        for (var anim of animations) {
            ret = await anim(elem);
        }
    } catch (e) {
        /* 忽略错误，继续之心 */
    }
    return ret;
}

//for...of在可迭代对象（包括Array、Map、Set、String、TypeAdday、arguments对象等）上创建一个迭代循环，调用自定义迭代钩子，并为不同属性执行语句
