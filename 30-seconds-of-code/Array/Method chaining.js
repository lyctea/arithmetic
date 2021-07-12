const files = ['foo.txt ', '.bar', '   ', 'baz.foo']
let filePaths = files.map(file => file.trim()).filter(Boolean).map(fileName => `~/cool_app/${fileName}`)

console.log(filePaths)