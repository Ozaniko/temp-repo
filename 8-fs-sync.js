const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const bruh = readFileSync('./content/subfolder/bruh.txt','utf-8')

console.log(first +  "\n" + bruh)

  writeFileSync('./content/second.txt','Its a second one')
 const newFile = readFileSync('./content/second.txt')

console.log("\n" + newFile)
