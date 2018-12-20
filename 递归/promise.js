/**
 * Promise 实现递归
 */
const getSentenceFragment = (offset = 0) => new Promise((resolve, reject) => {
  const pageSize = 3;
  const sentence = [...'hello world'];
  setTimeout(() => resolve({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : undefined
  }));
});

const getSentence = (offset = 0) =>
  getSentenceFragment(offset)
    .then(fragment => {
      if (fragment.nextPage) {
        return getSentence(fragment.nextPage)
          .then(nextFragment => fragment.data.concat(nextFragment));
      } else {
        return fragment.data;
      }
    });


getSentence().then(sentence => console.log(sentence))

/*
* async await 实现递归
* */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const getSentenceFragment = async (offset = 0) => {
  const pageSize = 3;
  const sentence = [...'hello world'];
  
  await wait(500);
  
  return {
    data: sentence.slice(offset, offset + 3),
    nextPage: offset + 3 < sentence.length ? offset + 3 : undefined
  };
};

const getSentence = async (offset = 0) => {
  const fragment = await getSentenceFragment(offset);
  if (fragment.nextPage) {
    return fragment.data.concat(await getSentence(fragment.nextPage));
  } else {
    return fragment.data;
  }
};

getSentence().then((sentence) => console.log(sentence));
