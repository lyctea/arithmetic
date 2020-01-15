const path = require('path')
const fs = require('fs')

var fileName = path.resolve(__dirname, 'data.txt');
var stream=fs.createReadStream(fileName);
console.log('stream内容',stream);
stream.on('data',function(chunk){
  console.log(chunk instanceof Buffer)
  console.log(chunk);
})
