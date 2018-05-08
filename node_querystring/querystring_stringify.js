
const querystring = require('querystring')

let obj = {
  name: 'wbh',
  age: 33
}
console.log(querystring.stringify(obj));