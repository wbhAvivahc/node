
const fs = require('fs');

fs.open('./fs.text','w+',function(err,fd){
  if(err) throw err;
  console.log('文件打开成功!',fd)
})