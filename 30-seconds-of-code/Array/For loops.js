const files = ['foo.txt ', '.bar', '   ', 'baz.foo']
let filePaths = []

for (let file of files) {
    const fileName = file.trim()
    if (fileName) {
        const filePath = `~/cool_app/${fileName}`
        filePaths.push(filePath)
        // return  完全关闭迭代器
        // break  退出迭代器
    }
}

console.log(filePaths)