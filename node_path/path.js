
//path.join
const path = require('path');


let path_join = path.join('c:\\file','name','name_inner.js')
console.log(path_join,'path_join')

let path_extname = path.extname(path_join);
console.log(path_extname,'path_extname')

let path_parse = path.parse(path_join);
console.log(path_parse,'path_parse')

let path_format = path.format(path_parse);
console.log(path_format,'path_format');
