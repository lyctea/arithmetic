function getURL(URL) {
    return new Promise(function(resolve, rejected) {
        var req = new XMLHttpRequest()
        req.open('get', URL, true)
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.responseText)
            } else {
                rejected(new Error(req.statusText))
            }
        }
        req.onerror = function() {
            rejected(new Error(req.statusText))
        }

        req.send()
    })
}

var URL = 'http://httpbin.org/get'

getURL(URL)
    .then(function onFulfilled(value) {
        console.log(value)
    })
    .catch(function onRejected(error) {
        console.error(error)
    })
