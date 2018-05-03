Promise.resolve(12).then(function(value) {
    console.log(value)
})

new Promise(function(resolve) {
    resolve(12)
}).then(function(value) {
    console.log(value)
})
