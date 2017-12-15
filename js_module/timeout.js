var EXE_TIME = (function(second) {
    var start = +new Date();
    while (start + second * 1000 > new Date()) {}
})(EXE_TIME);

console.log('2000ms executed');

/**
 * 同步/阻塞式加载
 *
 */
