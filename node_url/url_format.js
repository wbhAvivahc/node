
const url = require('url');

let urlObj = {
  host: 'www.baidu.com',
  port: '98',
  protocol:'https',
  search: '?name=wbh&age=123',
  query: 'name=wbh&age=123',
  path: '/'
};

let urlAdress = url.format(urlObj);

console.log(urlAdress,'urlboom')
