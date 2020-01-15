// 文件拷贝 将data.txt文件中的内容拷贝到copyData.txt
const fs = require('fs');
const path = require('path');


const fileName1 = path.resolve(__dirname, 'data.txt')

fs.readFile(fileName1, function (err, data) {
  if(err) {
    console.log(err.message)
    return
  }
  
  var dataStr = data.toString()
  
  const fileName2 = path.resolve(__dirname, 'copyData.txt')
  fs.writeFile(fileName2, dataStr, function (err) {
    if(err) {
      console.log(err.message)
      return
    }
    
    console.log('拷贝成功')
  })
  
})
