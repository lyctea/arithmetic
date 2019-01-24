/**
 * 解决的问题： async 与 异步（async/await）结合使用时，期望是同步执行的结果
 *
 */

const axios = require('axios');

const url = 'https://azu.github.io/promises-book/json/comment.json';

const todo = async () => {
  let result = [];
  
  const waitResult = [1, 2, 3].map(() => axios.get(url));
  
  await Promise.all(waitResult).then(data => {
    data.forEach(item => result.push(item.data));
  });
  
  return result;
};

todo().then((result) => {
  console.log(result);
});
