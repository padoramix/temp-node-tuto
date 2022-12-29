// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// Other way : 
// const names = require('./4-names')
// sayHi(names.john)
// sayHi(names.peter)