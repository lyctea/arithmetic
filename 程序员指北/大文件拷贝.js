const fs = require('fs');
const path = require('path');

function copy(src, dest, size = 16 * 1024, callback) {
  // 打开源文件
  fs.open(src, 'r', (err, readFd) => {
    // 打开目标文件
    fs.open(dest, 'w', (err, writeFd) => {
      let buf = Buffer.alloc(size);
      let readed = 0; // 下次读取文件的位置
      let writed = 0; // 下次写入文件的位置

      (function next() {
        // 读取
        fs.read(readFd, buf, 0, size, readed, (err, bytesRead) => {
          readed += bytesRead;

          // 如果都不到内容关闭文件
          if (!bytesRead) fs.close(readFd, err => console.log('关闭源文件'));

          // 写入
          fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
            // 如果没有内容了同步缓存，并关闭文件后执行回调
            if (!bytesWritten) {
              fs.fsync(writeFd, err => {
                fs.close(writeFd, err => !err && callback())
              });
            }
            writed += bytesWritten;

            // 继续读取、写入
            next();
          });
        });
      })();
    });
  });
}


// buffer 的长度
const BUFFER_SIZE = 3;

// 拷贝文件内容并写入
copy('6.txt', '7.txt', BUFFER_SIZE, () => {
  fs.readFile('7.txt', 'utf8', (err, data) => {
    // 拷贝完读取 7.txt 的内容
    console.log(data); // 你好
  });
});
