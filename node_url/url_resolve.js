const url = require('url');

let urlAddress = 'https://www.google.com';

let _url = url.resolve(urlAddress, 'boom?name=123');

console.log(_url,'url')