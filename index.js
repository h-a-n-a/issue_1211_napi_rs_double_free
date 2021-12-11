const { MagicString } = require('@napi-rs/magic-string')

// Memory double free on instantiation
const ms = new MagicString('asdf')

// ms.append('test')

// console.log(ms.toString())
