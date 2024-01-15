const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','bruh.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const content = path.resolve(__dirname,'content','subfolder','bruh.txt')
console.log(content)