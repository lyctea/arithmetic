function ajax(options) {
  let url = options.url
  const method = options.method.toLocaleLowerCase() || 'get'
  const async = options.async !== false //默认是true异步
  const data = options.data
  const xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP')

  if(options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        }else {
          reject && reject()
        }
      }
    }
    xhr.onerror = (err) => reject && reject(err)

    let paramArr = []
    let encodeData
    if(data instanceof Object) {
      for(let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    if(method === 'get') {
      const index = url.indexOf('?')
      if(index === -1) url += '?'
      else if(index !== url.length - 1) url += '&'
      url += encodeData
    }

    xhr.open(method, url, async)

    if(method === 'get') xhr.send(null)
    else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}


ajax({
  url: 'your request url',
  method: 'get',
  async: true,
  timeout: 1000,
  data: {
    test: 1,
    aaa: 2
  }
}).then(
  res => console.log('请求成功: ' + res),
  err => console.log('请求失败: ' + err)
)
