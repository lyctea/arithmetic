const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files.reduce((acc, file) => {
    const fileName = file.trim()
    if(fileName) {
        const filePath = `~/cool_app/${fileName}`
        acc.push(filePath)
    }
    return acc
}, [])

console.log(filePaths)