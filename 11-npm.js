const _ = require('lodash')

const items2 = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items2)

console.log(newItems)