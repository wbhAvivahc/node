# node_url

node url模块
===

* parse

```
  const url = require('url');
  url.parse();
```

>> 解析一个url地址，返回一个url对象包含 host，port，protocol，query等

* format

>>获取一个url对象，然后返回一个完整的url地址

* resolve

>> 获取一个base_url跟href_url,返回一个完整url

```
const url = require('url');

const urlAddress = url.resolve('https://www.baidu.com','name?name=wbh')

console.log(urlAddress) //https://www.baidu.com/name?name=wbh
```

*如果href_url没有在开头加上/ base_url会自动的在最后加上/ 再链接href_url  如果加上了就忽略*