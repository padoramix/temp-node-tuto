// Manual approach (creates package.json in the root, create properties, etc..)
// npm init (step by step install)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4, [ 5]]]]]
const newItems = _.flattenDeep( items )

console.log(newItems)
console.log('Hello people')